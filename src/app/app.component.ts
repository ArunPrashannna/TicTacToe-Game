import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' tic-tac-toe-game ';
  player1=true;
  player=1;
  winnerMessage="";
  //card-array
  array=["pen","pen","pen","pen","pen","pen","pen","pen","pen"];
  hideResetDiv: boolean = true;

  constructor(private toastr:ToastrService){}


  onClick(i:number){
    if(this.winnerMessage!=""){
      this.toastr.error("Game Over!");
      return;
    }
    if(this.array[i]!='pen'){
      this.toastr.info("Already Taken!");
      return;
    }
    if(this.player1){
      this.array[i]="cross";
      this.player=2;
    }
    else{
      this.player=1;
      this.array[i]="circle";
    }
    this.checkLogic();
    if(this.winnerMessage!="") this.hideResetDiv=false;
    this.player1=!this.player1;
  }
  resetGame(){
    this.winnerMessage="";
    this.array= ["pen","pen","pen","pen","pen","pen","pen","pen","pen"];
    this.hideResetDiv=true;
  }
  checkLogic(){
    if(this.array[0]==this.array[1] && this.array[1]==this.array[2] && this.array[0]!="pen"){
      this.winnerMsg(this.array[0]);
    }
    if(this.array[3]==this.array[4] && this.array[4]==this.array[5] && this.array[3]!="pen"){
      this.winnerMsg(this.array[3]);
    }
    if(this.array[6]==this.array[7] && this.array[7]==this.array[8] && this.array[6]!="pen"){
      this.winnerMsg(this.array[6]);
    }

    if(this.array[0]==this.array[3] && this.array[3]==this.array[6] && this.array[0]!="pen"){
      this.winnerMsg(this.array[0]);
    }
    if(this.array[1]==this.array[4] && this.array[4]==this.array[7] && this.array[1]!="pen"){
      this.winnerMsg(this.array[1]);
    }
    if(this.array[2]==this.array[5] && this.array[5]==this.array[8] && this.array[2]!="pen"){
      this.winnerMsg(this.array[2]);
    }
    if(this.array[0]==this.array[4] && this.array[4]==this.array[8] && this.array[0]!="pen"){
      this.winnerMsg(this.array[0]);
    }
    if(this.array[2]==this.array[4] && this.array[4]==this.array[6] && this.array[2]!="pen"){
      this.winnerMsg(this.array[2]);
    }
  }
  winnerMsg(str:string){
    if(str==="circle") this.winnerMessage="!!!Player-2 Won!!!";
    else this.winnerMessage="!!!Player-1 Won!!!";
  }
}
