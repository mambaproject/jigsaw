import {Component} from "@angular/core";
import {TimeGr} from "../../../../../jigsaw/common/service/time.service";

@Component({
    templateUrl: './demo.component.html'
})
export class DatePickerBasicDemoComponent {
    date;

    grItems = [
        {label: "Day", value: TimeGr.date},
        {label: "Week", value: TimeGr.week},
        {label: "Month", value: TimeGr.month}
    ];

    // ====================================================================
    // ignore the following lines, they are not important to this demo
    // ====================================================================
    summary: string = '';
    description: string = '';
}
