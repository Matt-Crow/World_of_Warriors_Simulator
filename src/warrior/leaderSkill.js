import {getElement} from "./elements.js";

export class Lead{
    constructor(amount, type){
	    this.amount = amount / 100;
        switch(type){
            case "p":
                this.type = "p";
                break;
            case "h":
                this.type = "h";
                break;
            default:
                this.type = getElement(type);
                break;
        }
    }
    
    // need healing effects
	apply(team){
        let target = (this.amount >= 0) ? team : team.enemyTeam;
		
		if (this.type === "p"){
			target.forEach((member)=>{
				member.phys_boosts.push(new Stat_boost("Leader Skill", this.amount, 1));
			});
		}else{
		    target.forEach((member)=>{
		        if(member.element === this.type){
		            member.ele_boosts.push(new Stat_boost("Leader Skill", this.amount, 1));
		        }
		    });
		}
	}
}