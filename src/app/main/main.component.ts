import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpService } from '../http.service';

//import the directive with the ref
import { BannerComponent } from '../banner/banner.component';
import { AdDirective } from '../test.directive';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  constructor(
    private httpService: HttpService
  ) {}
 
  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
    
    public viewContainerRef: any;
  
    @Input() ads: any = [];

    //import and save the component
    addComponent(): void { 

      this.viewContainerRef = this.adHost.viewContainerRef;
      const componentRef = this.viewContainerRef.createComponent(BannerComponent);
      componentRef.instance.data = {
        headline: "My Custom headline",
        content: "some random content"
      };
    }

    addComponent2(): void { 

      this.viewContainerRef = this.adHost.viewContainerRef;
      const componentRef = this.viewContainerRef.createComponent(BannerComponent);
      componentRef.instance.data = {
        headline: "My Custom headline 2",
        content: "some random content 2"
      };
    }

    //removes the components created
    clearComponent(): void {
      this.viewContainerRef.clear();
    }

    ngOnInit() {
      //add the component on load
      this.addComponent();
      this.addComponent2();
    }


}
