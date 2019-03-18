import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  categoryflag :boolean=true;
  sizeflag :boolean=true;
  constructor() { }

  ngOnInit() {
    
  }
  categoriesFunction(){
    let temp = document.getElementById("categoriesbox");
    if(this.categoryflag){
      temp.style.display="block";
      document.getElementById("cat").innerHTML="- Categories"
      
    console.log("inn")
    this.categoryflag =false;
    }else{
      temp.style.display="none";
      this.categoryflag =true;
      document.getElementById("cat").innerHTML="+ Categories"  }
    

  }
  sizeFunction(){
    let temp = document.getElementById("sizebox");
    if(this.sizeflag){
      temp.style.display="block";
      document.getElementById("siz").innerHTML="- Size"
      
    console.log("inn")
    this.sizeflag =false;
    }else{
      temp.style.display="none";
      this.sizeflag =true;
      document.getElementById("siz").innerHTML="+ Size"    }
    

  }
}
