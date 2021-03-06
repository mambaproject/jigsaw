import {NgModule} from '@angular/core';
import {JigsawSelectModule} from "jigsaw/pc-components/select/select";
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";
import {SelectOptionCountDemoComponent} from './demo.component';

@NgModule({
    imports: [JigsawSelectModule, JigsawDemoDescriptionModule],
    declarations: [SelectOptionCountDemoComponent],
    exports: [SelectOptionCountDemoComponent]
})
export class SelectOptionCountDemoModule {
}
