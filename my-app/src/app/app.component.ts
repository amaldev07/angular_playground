import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable'; // ✅ Import autoTable

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  /* 
    npm install jspdf jspdf-autotable
    npm install jspdf jspdf-autotable
  */
  // Sample data
  data = [
    {
      "region": "South America",
      "country": "Ecuador",
      "population": 17739607
    },
    {
      "region": "Africa",
      "country": "South Africa",
      "population": 58711247
    },
    {
      "region": "North America",
      "country": "United States",
      "population": 331667268
    },
    {
      "region": "Europe",
      "country": "Netherlands",
      "population": 17162250
    },
    {
      "region": "Asia",
      "country": "China",
      "population": 1412352609
    },
    {
      "region": "Africa",
      "country": "South Africa",
      "population": 59477800
    },
    {
      "region": "North America",
      "country": "Jamaica",
      "population": 3344506
    },
    {
      "region": "South America",
      "country": "Brazil",
      "population": 215844577
    },
    {
      "region": "North America",
      "country": "Honduras",
      "population": 10221178
    },
    {
      "region": "Asia",
      "country": "South Korea",
      "population": 51858493
    },
    {
      "region": "Oceania",
      "country": "New Zealand",
      "population": 5363820
    },
    {
      "region": "Oceania",
      "country": "Micronesia",
      "population": -6998
    },
    {
      "region": "Oceania",
      "country": "Solomon Islands",
      "population": 337155
    },
    {
      "region": "Europe",
      "country": "Sweden",
      "population": 10745679
    },
    {
      "region": "South America",
      "country": "Chile",
      "population": 20150395
    },
    {
      "region": "South America",
      "country": "Uruguay",
      "population": 3909872
    },
    {
      "region": "North America",
      "country": "Guatemala",
      "population": 17547167
    },
    {
      "region": "Europe",
      "country": "Spain",
      "population": 46904224
    },
    {
      "region": "Europe",
      "country": "Netherlands",
      "population": 17251303
    },
    {
      "region": "Africa",
      "country": "Kenya",
      "population": 54417822
    },
    {
      "region": "Europe",
      "country": "France",
      "population": 68413424
    },
    {
      "region": "North America",
      "country": "Honduras",
      "population": 10153985
    },
    {
      "region": "South America",
      "country": "Bolivia",
      "population": 12245508
    },
    {
      "region": "North America",
      "country": "Guatemala",
      "population": 17678508
    },
    {
      "region": "Asia",
      "country": "China",
      "population": 1412361561
    },
    {
      "region": "Africa",
      "country": "Ethiopia",
      "population": 119542650
    },
    {
      "region": "Asia",
      "country": "Japan",
      "population": 124700064
    },
    {
      "region": "Africa",
      "country": "Sudan",
      "population": 48436899
    },
    {
      "region": "Oceania",
      "country": "Vanuatu",
      "population": -131121
    },
    {
      "region": "South America",
      "country": "Argentina",
      "population": 46124520
    },
    {
      "region": "Asia",
      "country": "Japan",
      "population": 124528390
    },
    {
      "region": "Asia",
      "country": "Thailand",
      "population": 71436104
    },
    {
      "region": "Europe",
      "country": "Poland",
      "population": 38459641
    },
    {
      "region": "Africa",
      "country": "Kenya",
      "population": 53753140
    },
    {
      "region": "Asia",
      "country": "Philippines",
      "population": 113035918
    },
    {
      "region": "Asia",
      "country": "Philippines",
      "population": 112811380
    },
    {
      "region": "Oceania",
      "country": "Papua New Guinea",
      "population": 9079515
    },
    {
      "region": "South America",
      "country": "Chile",
      "population": 19605128
    },
    {
      "region": "North America",
      "country": "United States",
      "population": 331810597
    },
    {
      "region": "North America",
      "country": "Jamaica",
      "population": 2896159
    },
    {
      "region": "Europe",
      "country": "Sweden",
      "population": 10584766
    },
    {
      "region": "Oceania",
      "country": "Papua New Guinea",
      "population": 9352371
    },
    {
      "region": "Europe",
      "country": "Italy",
      "population": 59302064
    },
    {
      "region": "South America",
      "country": "Paraguay",
      "population": 7047616
    },
    {
      "region": "Oceania",
      "country": "Vanuatu",
      "population": -115836
    },
    {
      "region": "Oceania",
      "country": "Vanuatu",
      "population": 117209
    },
    {
      "region": "Asia",
      "country": "Bangladesh",
      "population": 169889037
    },
    {
      "region": "Oceania",
      "country": "New Zealand",
      "population": 5545043
    },
    {
      "region": "Europe",
      "country": "Poland",
      "population": 38001019
    },
    {
      "region": "Africa",
      "country": "South Africa",
      "population": 59265080
    },
    {
      "region": "Africa",
      "country": "Kenya",
      "population": 54091295
    },
    {
      "region": "Asia",
      "country": "Vietnam",
      "population": 99245139
    },
    {
      "region": "Europe",
      "country": "France",
      "population": 68460067
    },
    {
      "region": "South America",
      "country": "Paraguay",
      "population": 7121713
    },
    {
      "region": "Oceania",
      "country": "Vanuatu",
      "population": -101425
    },
    {
      "region": "North America",
      "country": "Cuba",
      "population": 11112750
    },
    {
      "region": "North America",
      "country": "Jamaica",
      "population": 3335468
    },
    {
      "region": "Europe",
      "country": "United Kingdom",
      "population": 67086634
    },
    {
      "region": "Asia",
      "country": "Vietnam",
      "population": 98679390
    },
    {
      "region": "Africa",
      "country": "Sudan",
      "population": 47721985
    },
    {
      "region": "Africa",
      "country": "Morocco",
      "population": 36740574
    },
    {
      "region": "Oceania",
      "country": "Australia",
      "population": 26372216
    },
    {
      "region": "Asia",
      "country": "South Korea",
      "population": 51718053
    },
    {
      "region": "North America",
      "country": "Jamaica",
      "population": 2720600
    },
    {
      "region": "Asia",
      "country": "Indonesia",
      "population": 277185753
    },
    {
      "region": "Africa",
      "country": "Angola",
      "population": 34112485
    },
    {
      "region": "Africa",
      "country": "Morocco",
      "population": 37196256
    },
    {
      "region": "North America",
      "country": "Dominican Republic",
      "population": 11196186
    },
    {
      "region": "Oceania",
      "country": "Solomon Islands",
      "population": 800426
    },
    {
      "region": "South America",
      "country": "Brazil",
      "population": 216357210
    },
    {
      "region": "Africa",
      "country": "Ghana",
      "population": 32984226
    },
    {
      "region": "Europe",
      "country": "Germany",
      "population": 83160350
    },
    {
      "region": "South America",
      "country": "Paraguay",
      "population": 7403025
    },
    {
      "region": "Africa",
      "country": "Algeria",
      "population": 44621386
    },
    {
      "region": "Africa",
      "country": "Egypt",
      "population": 109491657
    },
    {
      "region": "Asia",
      "country": "Bangladesh",
      "population": 169515482
    },
    {
      "region": "Europe",
      "country": "Italy",
      "population": 59454863
    },
    {
      "region": "South America",
      "country": "Bolivia",
      "population": 12419739
    },
    {
      "region": "South America",
      "country": "Venezuela",
      "population": 27568852
    },
    {
      "region": "Africa",
      "country": "Nigeria",
      "population": 223385414
    },
    {
      "region": "North America",
      "country": "United States",
      "population": 332380577
    },
    {
      "region": "North America",
      "country": "Honduras",
      "population": 9929090
    },
    {
      "region": "Oceania",
      "country": "Micronesia",
      "population": 94651
    },
    {
      "region": "Africa",
      "country": "Ghana",
      "population": 32652042
    },
    {
      "region": "North America",
      "country": "Dominican Republic",
      "population": 11007633
    },
    {
      "region": "South America",
      "country": "Bolivia",
      "population": 11633897
    },
    {
      "region": "Asia",
      "country": "Bangladesh",
      "population": 170063098
    },
    {
      "region": "Oceania",
      "country": "Micronesia",
      "population": -154007
    },
    {
      "region": "Asia",
      "country": "Vietnam",
      "population": 99100747
    },
    {
      "region": "South America",
      "country": "Colombia",
      "population": 51697856
    },
    {
      "region": "Europe",
      "country": "Germany",
      "population": 83443358
    },
    {
      "region": "Asia",
      "country": "China",
      "population": 1412431710
    },
    {
      "region": "Europe",
      "country": "Sweden",
      "population": 10800745
    },
    {
      "region": "Africa",
      "country": "Angola",
      "population": 34414033
    },
    {
      "region": "North America",
      "country": "Cuba",
      "population": 11039880
    },
    {
      "region": "Asia",
      "country": "Japan",
      "population": 125334787
    },
    {
      "region": "Asia",
      "country": "India",
      "population": 1428333924
    },
    {
      "region": "Africa",
      "country": "Morocco",
      "population": 37007649
    },
    {
      "region": "South America",
      "country": "Bolivia",
      "population": 12426982
    },
    {
      "region": "Africa",
      "country": "Nigeria",
      "population": 223308592
    },
    {
      "region": "Europe",
      "country": "Sweden",
      "population": 10346431
    },
    {
      "region": "Oceania",
      "country": "Tonga",
      "population": 522559
    },
    {
      "region": "North America",
      "country": "United States",
      "population": 332011029
    },
    {
      "region": "Europe",
      "country": "Italy",
      "population": 58727487
    },
    {
      "region": "Africa",
      "country": "Algeria",
      "population": 45474166
    },
    {
      "region": "Africa",
      "country": "Ethiopia",
      "population": 119905570
    },
    {
      "region": "Africa",
      "country": "Ethiopia",
      "population": 119964870
    },
    {
      "region": "Europe",
      "country": "Sweden",
      "population": 10265665
    },
    {
      "region": "Oceania",
      "country": "Papua New Guinea",
      "population": 8612276
    },
    {
      "region": "Asia",
      "country": "South Korea",
      "population": 51513630
    },
    {
      "region": "North America",
      "country": "Cuba",
      "population": 11262753
    },
    {
      "region": "South America",
      "country": "Colombia",
      "population": 51726976
    },
    {
      "region": "North America",
      "country": "Canada",
      "population": 38643355
    },
    {
      "region": "Africa",
      "country": "Morocco",
      "population": 36880285
    },
    {
      "region": "Asia",
      "country": "Philippines",
      "population": 112730124
    },
    {
      "region": "Africa",
      "country": "Morocco",
      "population": 36704673
    },
    {
      "region": "North America",
      "country": "Cuba",
      "population": 10863384
    },
    {
      "region": "South America",
      "country": "Peru",
      "population": 34296522
    },
    {
      "region": "Oceania",
      "country": "Australia",
      "population": 26369265
    },
    {
      "region": "Oceania",
      "country": "Micronesia",
      "population": 617321
    },
    {
      "region": "South America",
      "country": "Ecuador",
      "population": 18267568
    },
    {
      "region": "Europe",
      "country": "France",
      "population": 68085780
    },
    {
      "region": "Oceania",
      "country": "Palau",
      "population": -305376
    },
    {
      "region": "Asia",
      "country": "China",
      "population": 1412320364
    },
    {
      "region": "Oceania",
      "country": "Papua New Guinea",
      "population": 9132879
    },
    {
      "region": "Africa",
      "country": "Ghana",
      "population": 33389934
    },
    {
      "region": "Africa",
      "country": "South Africa",
      "population": 58565428
    },
    {
      "region": "Oceania",
      "country": "New Zealand",
      "population": 5241019
    },
    {
      "region": "Oceania",
      "country": "Fiji",
      "population": 1079602
    },
    {
      "region": "Asia",
      "country": "South Korea",
      "population": 52263013
    },
    {
      "region": "Europe",
      "country": "Poland",
      "population": 37965645
    },
    {
      "region": "Africa",
      "country": "Egypt",
      "population": 108880255
    },
    {
      "region": "Europe",
      "country": "Sweden",
      "population": 10268850
    },
    {
      "region": "South America",
      "country": "Chile",
      "population": 20101273
    },
    {
      "region": "Africa",
      "country": "Algeria",
      "population": 44748540
    },
    {
      "region": "Oceania",
      "country": "Tonga",
      "population": -333070
    },
    {
      "region": "Oceania",
      "country": "Vanuatu",
      "population": 240814
    },
    {
      "region": "Oceania",
      "country": "Samoa",
      "population": -121450
    },
    {
      "region": "North America",
      "country": "Guatemala",
      "population": 17807685
    },
    {
      "region": "Oceania",
      "country": "New Zealand",
      "population": 5592633
    },
    {
      "region": "Oceania",
      "country": "Australia",
      "population": 26221995
    },
    {
      "region": "Oceania",
      "country": "Australia",
      "population": 26274516
    },
    {
      "region": "Asia",
      "country": "Bangladesh",
      "population": 170124377
    },
    {
      "region": "Europe",
      "country": "Netherlands",
      "population": 17581253
    },
    {
      "region": "Europe",
      "country": "Italy",
      "population": 59174773
    },
    {
      "region": "South America",
      "country": "Bolivia",
      "population": 11776805
    },
    {
      "region": "Africa",
      "country": "Algeria",
      "population": 45279155
    },
    {
      "region": "Europe",
      "country": "Spain",
      "population": 46776324
    },
    {
      "region": "Oceania",
      "country": "Tonga",
      "population": 542901
    },
    {
      "region": "North America",
      "country": "Canada",
      "population": 38758984
    },
    {
      "region": "Asia",
      "country": "Vietnam",
      "population": 99002143
    },
    {
      "region": "South America",
      "country": "Brazil",
      "population": 215605799
    },
    {
      "region": "North America",
      "country": "Guatemala",
      "population": 18154760
    },
    {
      "region": "Asia",
      "country": "India",
      "population": 1428446081
    },
    {
      "region": "Asia",
      "country": "Philippines",
      "population": 113058429
    },
    {
      "region": "North America",
      "country": "Mexico",
      "population": 126686640
    },
    {
      "region": "Asia",
      "country": "Indonesia",
      "population": 277121937
    },
    {
      "region": "South America",
      "country": "Chile",
      "population": 19825909
    },
    {
      "region": "Asia",
      "country": "Pakistan",
      "population": 230642083
    },
    {
      "region": "Africa",
      "country": "Sudan",
      "population": 48124186
    },
    {
      "region": "North America",
      "country": "Honduras",
      "population": 9511942
    },
    {
      "region": "Africa",
      "country": "Algeria",
      "population": 44797735
    },
    {
      "region": "Europe",
      "country": "Italy",
      "population": 59311710
    },
    {
      "region": "Oceania",
      "country": "Samoa",
      "population": 274141
    },
    {
      "region": "South America",
      "country": "Paraguay",
      "population": 7527803
    },
    {
      "region": "Oceania",
      "country": "Australia",
      "population": 26018582
    },
    {
      "region": "Asia",
      "country": "Pakistan",
      "population": 230543075
    },
    {
      "region": "South America",
      "country": "Peru",
      "population": 34360213
    },
    {
      "region": "Oceania",
      "country": "Fiji",
      "population": 781465
    },
    {
      "region": "North America",
      "country": "Dominican Republic",
      "population": 10910828
    },
    {
      "region": "Asia",
      "country": "India",
      "population": 1428064919
    },
    {
      "region": "North America",
      "country": "Mexico",
      "population": 127156196
    },
    {
      "region": "Asia",
      "country": "Indonesia",
      "population": 277244535
    },
    {
      "region": "Asia",
      "country": "Vietnam",
      "population": 99357477
    },
    {
      "region": "South America",
      "country": "Brazil",
      "population": 215807381
    },
    {
      "region": "Europe",
      "country": "Spain",
      "population": 47407350
    },
    {
      "region": "South America",
      "country": "Ecuador",
      "population": 18279803
    },
    {
      "region": "North America",
      "country": "Dominican Republic",
      "population": 10728816
    },
    {
      "region": "North America",
      "country": "Haiti",
      "population": 11450319
    },
    {
      "region": "South America",
      "country": "Argentina",
      "population": 45674378
    },
    {
      "region": "Asia",
      "country": "Thailand",
      "population": 71273580
    },
    {
      "region": "Oceania",
      "country": "Micronesia",
      "population": 371695
    },
    {
      "region": "Africa",
      "country": "Angola",
      "population": 34011397
    },
    {
      "region": "Africa",
      "country": "Nigeria",
      "population": 223173060
    },
    {
      "region": "Africa",
      "country": "Egypt",
      "population": 108918200
    },
    {
      "region": "Oceania",
      "country": "New Zealand",
      "population": 5547784
    },
    {
      "region": "Oceania",
      "country": "Vanuatu",
      "population": 362213
    },
    {
      "region": "Europe",
      "country": "Netherlands",
      "population": 17291201
    },
    {
      "region": "South America",
      "country": "Brazil",
      "population": 215910979
    },
    {
      "region": "Africa",
      "country": "Algeria",
      "population": 44600602
    },
    {
      "region": "Europe",
      "country": "Germany",
      "population": 82688873
    },
    {
      "region": "Europe",
      "country": "Poland",
      "population": 38211459
    },
    {
      "region": "Europe",
      "country": "Spain",
      "population": 47484179
    },
    {
      "region": "Africa",
      "country": "Angola",
      "population": 34108087
    },
    {
      "region": "Europe",
      "country": "Norway",
      "population": 5451603
    },
    {
      "region": "Oceania",
      "country": "Vanuatu",
      "population": 442226
    },
    {
      "region": "South America",
      "country": "Argentina",
      "population": 45983957
    },
    {
      "region": "North America",
      "country": "Guatemala",
      "population": 17930205
    },
    {
      "region": "North America",
      "country": "Cuba",
      "population": 11472592
    },
    {
      "region": "Oceania",
      "country": "Samoa",
      "population": -284849
    },
    {
      "region": "Asia",
      "country": "Indonesia",
      "population": 277707425
    },
    {
      "region": "Africa",
      "country": "Algeria",
      "population": 44526069
    },
    {
      "region": "Europe",
      "country": "Spain",
      "population": 46780771
    },
    {
      "region": "North America",
      "country": "Panama",
      "population": 4444010
    },
    {
      "region": "Asia",
      "country": "Pakistan",
      "population": 231319518
    },
    {
      "region": "North America",
      "country": "Haiti",
      "population": 11461644
    },
    {
      "region": "North America",
      "country": "Guatemala",
      "population": 17801070
    },
    {
      "region": "Europe",
      "country": "Germany",
      "population": 82541011
    },
    {
      "region": "Asia",
      "country": "China",
      "population": 1412146632
    },
    {
      "region": "Africa",
      "country": "Ethiopia",
      "population": 120394294
    },
    {
      "region": "Oceania",
      "country": "Fiji",
      "population": 560092
    },
    {
      "region": "Europe",
      "country": "Italy",
      "population": 58970122
    },
    {
      "region": "North America",
      "country": "Haiti",
      "population": 11056289
    },
    {
      "region": "Oceania",
      "country": "Palau",
      "population": 94445
    },
    {
      "region": "North America",
      "country": "Mexico",
      "population": 126807580
    },
    {
      "region": "South America",
      "country": "Peru",
      "population": 33824221
    },
    {
      "region": "Europe",
      "country": "Sweden",
      "population": 10500608
    },
    {
      "region": "Africa",
      "country": "Angola",
      "population": 34415149
    },
    {
      "region": "Europe",
      "country": "Sweden",
      "population": 10013888
    },
    {
      "region": "South America",
      "country": "Uruguay",
      "population": 3918685
    },
    {
      "region": "Europe",
      "country": "Netherlands",
      "population": 17651586
    },
    {
      "region": "Oceania",
      "country": "Solomon Islands",
      "population": 843738
    },
    {
      "region": "Europe",
      "country": "Italy",
      "population": 58813605
    },
    {
      "region": "Asia",
      "country": "Thailand",
      "population": 70980042
    },
    {
      "region": "Oceania",
      "country": "New Zealand",
      "population": 5013601
    },
    {
      "region": "Europe",
      "country": "Germany",
      "population": 82509477
    },
    {
      "region": "Africa",
      "country": "Algeria",
      "population": 45396307
    },
    {
      "region": "Oceania",
      "country": "Samoa",
      "population": -48392
    },
    {
      "region": "Europe",
      "country": "United Kingdom",
      "population": 67253140
    },
    {
      "region": "North America",
      "country": "Guatemala",
      "population": 17550018
    },
    {
      "region": "Africa",
      "country": "Egypt",
      "population": 109373135
    },
    {
      "region": "North America",
      "country": "Cuba",
      "population": 11037142
    },
    {
      "region": "South America",
      "country": "Colombia",
      "population": 51571477
    },
    {
      "region": "South America",
      "country": "Chile",
      "population": 19920332
    },
    {
      "region": "South America",
      "country": "Brazil",
      "population": 216054837
    },
    {
      "region": "Europe",
      "country": "Italy",
      "population": 59363515
    },
    {
      "region": "Europe",
      "country": "United Kingdom",
      "population": 67088504
    },
    {
      "region": "Europe",
      "country": "Poland",
      "population": 37516127
    },
    {
      "region": "South America",
      "country": "Paraguay",
      "population": 7396619
    },
    {
      "region": "North America",
      "country": "Honduras",
      "population": 9517595
    },
    {
      "region": "Oceania",
      "country": "Samoa",
      "population": -119457
    },
    {
      "region": "South America",
      "country": "Chile",
      "population": 19628066
    },
    {
      "region": "Europe",
      "country": "Norway",
      "population": 5082670
    },
    {
      "region": "North America",
      "country": "Dominican Republic",
      "population": 11459691
    },
    {
      "region": "Asia",
      "country": "Japan",
      "population": 124935983
    },
    {
      "region": "Oceania",
      "country": "Solomon Islands",
      "population": 761542
    },
    {
      "region": "South America",
      "country": "Peru",
      "population": 34207903
    },
    {
      "region": "Africa",
      "country": "Ethiopia",
      "population": 120261962
    },
    {
      "region": "North America",
      "country": "Guatemala",
      "population": 18189124
    },
    {
      "region": "Europe",
      "country": "United Kingdom",
      "population": 67315687
    },
    {
      "region": "Oceania",
      "country": "Papua New Guinea",
      "population": 9407682
    },
    {
      "region": "Asia",
      "country": "Indonesia",
      "population": 277846713
    },
    {
      "region": "Asia",
      "country": "Indonesia",
      "population": 277509316
    },
    {
      "region": "South America",
      "country": "Colombia",
      "population": 51519772
    },
    {
      "region": "Europe",
      "country": "Italy",
      "population": 58717917
    }
  ];
  sortedData:any =[];

   



  downloadPDF() {
    this.sortedData = [...this.data].sort((a, b) => a.region.localeCompare(b.region));
    debugger;
    let lastRegion = "";
    const rows:any = [];
    this.sortedData.forEach((item:any, index:any) => {
      if (item.region === lastRegion && index%34 !== 0) {
        rows.push([index + 1, "", item.country, item.population]); // Empty Region for merge effect
      } else {
        rows.push([index + 1, item.region, item.country, item.population]);
      }
      lastRegion = item.region;
    });


    const doc = new jsPDF();

    // Table headers
    const headers = [["id", "Region", "Country", "Population"]];

    // Convert data to table rows
    // const rows = this.sortedData.map((item:any, id:any) => [id + 1, item.region, item.country, item.population]);

    // ✅ Call autoTable correctly
    autoTable(doc, { head: headers, body: rows });

    // Save PDF
    doc.save("data.pdf");
  }
}