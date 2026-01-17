import {
    Directive,
    ElementRef,
    Input,
    Renderer2,
    OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
import { IdentityService } from '../services/identity.service';
import { UserService } from '../services/user.service';

@Directive({
    selector: '[appApprovePermission]'
})
export class ApprovePermissionDirective implements OnDestroy {

    private records: any[] = [];
    private entitlement!: string;
    private loggedInUserId!: string;

    private sub = new Subscription();

    constructor(
        private el: ElementRef<HTMLButtonElement>,
        private renderer: Renderer2,
        private identityService: IdentityService,
        private userService: UserService
    ) {
        // Only dynamic external dependency
        this.sub.add(
            this.identityService.userId$.subscribe(id => {
                this.loggedInUserId = id;
                this.evaluate();
            })
        );
    }

    // Dynamic input
    @Input()
    set appApprovePermissionRecords(records: any[]) {
        this.records = records || [];
        this.evaluate();
    }

    // Static input (set once)
    @Input()
    set appApprovePermissionEntitlement(entitlement: string) {
        this.entitlement = entitlement;
        // No need to re-evaluate repeatedly, but safe to do once
        this.evaluate();
    }

    private evaluate(): void {
        // Guard
        if (!this.loggedInUserId || !this.entitlement) {
            this.disable();
            return;
        }

        const hasRecords = this.records.length > 0;

        const hasDifferentCreator = this.records.some(
            r => r.createdBy !== this.loggedInUserId
        );

        const hasPrivilege =
            this.userService.hasPrivilege(this.entitlement);

        const canApprove =
            hasRecords && hasDifferentCreator && hasPrivilege;

        canApprove ? this.enable() : this.disable();
    }

    private enable() {
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }

    private disable() {
        this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
