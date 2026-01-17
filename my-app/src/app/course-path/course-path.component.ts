import { Component } from '@angular/core';

type Status = 'locked' | 'enabled' | 'completed';

@Component({
  selector: 'app-course-path',
  templateUrl: './course-path.component.html',
  styleUrls: ['./course-path.component.scss'],
})
export class CoursePathComponent {
  // display order (you can later generate this using topo sort if needed)
  courseOrder = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'] as const;

  // course -> prerequisites
  prereqs: Record<string, string[]> = {
    HTML: [],
    CSS: [],
    JavaScript: ['HTML', 'CSS'],
    React: ['JavaScript'],
    NodeJS: ['JavaScript'],
  };

  // store completion
  completed = new Set<string>(); // try: new Set(['HTML']) to start with HTML completed

  isUnlocked(course: string): boolean {
    const reqs = this.prereqs[course] ?? [];
    return reqs.every((r) => this.completed.has(r));
  }

  getStatus(course: string): Status {
    if (this.completed.has(course)) return 'completed';
    if (this.isUnlocked(course)) return 'enabled';
    return 'locked';
  }

  icon(course: string): string {
    const s = this.getStatus(course);
    if (s === 'completed') return '✅';
    if (s === 'enabled') return '➡️';
    return '🔒';
  }

  dotClass(course: string): string {
    return `dot-${this.getStatus(course)}`;
  }

  toggleComplete(course: string): void {
    if (this.getStatus(course) === 'locked') return;

    if (this.completed.has(course)) this.completed.delete(course);
    else this.completed.add(course);
  }

  openCourse(course: string): void {
    if (this.getStatus(course) === 'locked') return;
    alert(`Open: ${course} (status: ${this.getStatus(course)})`);
  }

  prereqText(course: string): string {
    const reqs = this.prereqs[course] ?? [];
    return reqs.length ? `Requires: ${reqs.join(' + ')}` : 'No prerequisites';
  }

  nextUnlocked(): string | null {
    for (const c of this.courseOrder) {
      if (this.getStatus(c) === 'enabled') return c;
    }
    return null;
  }

  completedText(): string {
    const arr = Array.from(this.completed);
    return arr.length ? arr.join(', ') : 'None';
  }
}
