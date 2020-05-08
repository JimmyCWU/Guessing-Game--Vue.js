            var app = new Vue({
                el: '#app',
                data: {
                    //iteration1 variables
                      message1 : "",
					  isGussed_1 : false,
					  result : "",
					  GuessingTime : false,
					  numTrial : 0,
					  correctNum1 : 0,
					  disabled : false,
                  //iteration2 variables
					  message2 : "",
                      isGussed_2 : false,
                      result : "",
					  correctNum2 : 0,
                      absValue : 0,
                  //iteration3 variables
                      message3: "Please imput a number between 0 and 99",
                      computerOutput: null,
                      counterDisplay: 0,
                      count: 0,
                      mixnum: 0,
                      maxnum: 99,
                      userNumber3: null,
                      correctNumber3: null,
                      guessNumber3: null,
				  //iteration4 variables
				      message: "Please set a number between 0 and 99, computer is going to guess it.",
					  computerOutput:null,
					  counterDisplay:0,
				 	  count:0,
					  mixnum:0,
				   	  maxnum:99,
					  userNumber:null,
					  correctNumber:null,
					  guessNumber:0,
					  absoluteNum:null,
					  yourReply:"",
					  condition:"",
					  inList : "",
					  lists : [
						{
						  number:"ready for guessing",
						}
					  ],
					  seen1: false,
					  seen2: false,
					  seen3: false,
					  seen4: false
                },
            beforeMount: function (){
				this.correctNum1 = Math.floor(Math.random() * 100)
				this.correctNum2 = Math.floor(Math.random() * 100)
              },
            methods: {
            //iteration1
			Submit1: function(){
                      this.isGussed_1 = true
					  this.GuessingTime = true

					if(parseInt(this.message1) >= 0 && parseInt(this.message1) <= 99 && this.correctNum1 > parseInt(this.message1)) {
						this.result = "Try higher"
						this.numTrial += 1
					}
					else
						if(parseInt(this.message1) >= 0 && parseInt(this.message1) <= 99 && this.correctNum1 < parseInt(this.message1)) {
							this.result = "Try lower"
							this.numTrial += 1
						}
					else
						if(this.correctNum1 == parseInt(this.message1)) {
							this.result = "Correct number"
							this.numTrial += 1
							this.disabled = true
						}
					else{
						this.result = "You should type a number under 99"
					}
					  
               },

               //iteration2
               Submit2: function(){
                      this.isGussed_2 = true
                      this.GuessingTime = true
                      this.numTrial += 1
                      absValue = Math.abs(this.correctNum2  - parseInt(this.message2))
                      if(absValue >= 40){
                        this.result = "COLD"
                      }
                      else if (absValue >= 20 && absValue<=39){
                        this.result = "COOL"

                      }

                      else if (absValue >= 10 && absValue<=19){
                        this.result = "WARE"

                      }
                      else if (absValue >= 1 && absValue <=9){
                        this.result = "HOT"
                      }
                      else{
                        this.result = "correct"
                      }
               },


               //iteration3
                   setNum3(){
                       this.correctNumber3 = this.userNumber3
                       this.userNumber3 = ''
                       if(this.correctNumber3!=""&& this.correctNumber3!=null){
                         if(!isNaN(this.correctNumber3) && this.correctNumber3>=0 && this.correctNumber3<=99){
                           this.message3 = "Your number is: "+ this.correctNumber3
                         }
                         else{
                           this.message3 =" Invalid input! Try it again"
                         }
                       }
                   },

                   restart3(){
                     this.message3 = "Please imput a random number between 0 and 99"
                     this.computerOutput= null
                     this.counterDisplay= 0
                     this.count= 0
                     this.mixnum= 0
                     this.maxnum= 99
                     this.userNumber3= null
                     this.correctNumber3= null
                     this.guessNumber3= null
                   },

                   guess3(){
                     this.count++
                     this.guessNumber3 = Math.floor(Math.random() *(this.maxnum - this.mixnum)+ this.mixnum)
                     this.computerOutput = "The number from programme is: " + this.guessNumber3
                     this.counterDisplay =  this.count
                   },

                   tryhigher(){
                     if(this.guessNumber3 == this.maxnum){
                       this.computerOutput ="Your are liar!"
                     }
                     else{
                       this.mixnum = this.guessNumber3 + 1
                       this.guess3()
                     }
                   },

                   trylower(){
                     if(this.guessNumber3 == this.mixnum){
                       this.computerOutput ="Your are liar!"
                     }
                     else{
                       this.maxnum = this.guessNumber3 - 1
                       this.guess3()
                     }
                   },

                   correct3(){
                     if (this.correctNumber3 == null){
                       this.computerOutput ="Please set a guess number."
                     }
                     else{
                       if(this.guessNumber3 != this.correctNumber3){
                         this.computerOutput ="Your are liar!"
                       }
                       else{
                         this.computerOutput ="Correct number"
                         this.message3 = "You have tried it in " + this.count +" times"
                       }
                     }
                   },

			//iteration4
				setNum(){
					this.correctNumber = this.userNumber
					this.userNumber = ""
					if(this.correctNumber>=0 && this.correctNumber<=99 && this.correctNumber!="" && this.correctNumber!=null){
						this.message = "The number you set is: " + this.correctNumber
					  }
					  else{
						this.message ="Should enter a number between 0 - 99"
					  }
				},

				repeated : function() {
					for(var i=0; i < this.lists.length; i++) {
						if( this.guessNumber == this.lists[i].number ) {
							return this.inList = true
						}
					}
					return this.inList = false
				},

				restart(){
				  this.message = "Please set a number between 0 and 99, computer is going to guess it."
				  this.computerOutput=null
				  this.counterDisplay=0
				  this.count=0
				  this.mixnum=0
				  this.maxnum=99
				  this.userNumber=null
				  this.correctNumber=null
				  this.guessNumber=null
				  this.absoluteNum=null
				  this.yourReply=""
				  this.condition=""
				  this.inList="",
				  this.lists = [
					  {
						number:"ready for guessing",
					  }
				  ]
				},

				replyRange: function() {
				  this.absoluteNum = Math.abs(this.correctNumber - this.guessNumber)
				  if(this.absoluteNum >= 40) {
					  this.yourReply = "Cold : over than 40"
					  this.condition = "Cold"
					  //return this.condition
				  }
				  else
					  if(this.absoluteNum >= 20 && this.absoluteNum <= 39) {
						  this.yourReply = "Cool : between 20-39"
						  this.condition = "Cool"
						  //return this.condition
					  }
				  else
					  if(this.absoluteNum >= 10 && this.absoluteNum <= 19) {
						  this.yourReply = "Warm : between 10-29"
						  this.condition = "Warm"
						  //return this.condition
				  }
				  else
					  if(this.absoluteNum >= 1 && this.absoluteNum <= 9) {
						  this.yourReply = "Hot : between 1-9"
						  this.condition = "Hot"
						  //return this.condition
				  }
				  else
					  if(this.absoluteNum == 0) {
						  this.yourReply = "Correct number!"
						  this.message = "Good! You have tried it in " + this.counterDisplay + " times"
				  }
				  else{
					  this.yourReply = "You should input a number between 0 and 99, it cannot be a text!"
					  //this.correctNumber
				  }
				},

				guess(){
				  if(this.count=0){
					this.guessNumber = 0
				  }
				this.lists.push({
				 number: this.guessNumber
				 })
				this.counterDisplay += 1

				  //this.guessNumber = Math.floor(Math.random() * (this.maxnum - this.mixnum) + this.mixnum)
				  this.absoluteNum = Math.abs(this.correctNumber - this.guessNumber)
				  this.replyRange()
				  this.computerOutput = "Computer guesses your number is " + this.guessNumber
				  //this.yourReply
				  //this.replyRange()
				},
				hot(){
				  if(this.guessNumber > this.maxnum && this.guessNumber < this.mixnum){
					this.computerOutput ="It is not equal to your setting number, liar!"
				  }
				  else{
					this.mixnum = 1
					this.maxnum = 9
					this.guessNumber = Math.floor(Math.random() * (this.maxnum - this.mixnum) + this.mixnum)
					//this.counterDisplay++
					this.guess()
				  }
				},

				warm(){
				  if(this.guessNumber > this.maxnum && this.guessNumber < this.mixnum){
					this.computerOutput ="It is not equal to your setting number, liar!"
				  }
				  else{
					this.mixnum = 10
					this.maxnum = 19
					this.guessNumber = Math.floor(Math.random() * (this.maxnum - this.mixnum) + this.mixnum)
					//this.counterDisplay++
					this.guess()
				  }
				},

				cool(){
				  if(this.guessNumber > this.maxnum && this.guessNumber < this.mixnum){
					this.computerOutput ="It is not equal to your setting number, liar!"
				  }
				  else{
					this.mixnum = 20
					this.maxnum = 39
					this.guessNumber = Math.floor(Math.random() * (this.maxnum - this.mixnum) + this.mixnum)
					//this.counterDisplay++
					this.guess()
				  }
				},

				cold(){
				  if(this.guessNumber > this.maxnum && this.guessNumber < this.mixnum){
					this.computerOutput ="It is not equal to your setting number, liar!"
				  }
				  else{
					this.mixnum = 40
					this.guessNumber = Math.floor(Math.random() * (this.maxnum - this.mixnum) + this.mixnum)
					//this.counterDisplay++
					this.guess()
				  }
				},
				correct(){
				  if (this.correctNumber ==null){
					this.computerOutput ="Please set a guess number."
				  }
				  else{
					if(this.guessNumber != this.correctNumber){
					  this.computerOutput ="It is not equal to your setting number, liar!"
					}
					else{
					  this.computerOutput ="Correct number"
					  this.message = "Good! You have tried it in " + this.counterDisplay +  " times"
					}
				  }
				},
				
			set1 (event) {
                 this.seen1 = true
                 this.seen2 = false
                 this.seen3 = false
                 this.seen4 = false
               },

               set2 (event) {
                 this.seen1 = false
                 this.seen2 = true
                 this.seen3 = false
                 this.seen4 = false
               },

               set3 (event) {
                 this.seen1 = false
                 this.seen2 = false
                 this.seen3 = true
                 this.seen4 = false
               },

               set4 (event) {
                 this.seen1 = false
                 this.seen2 = false
                 this.seen3 = false
                 this.seen4 = true
               },

               setHome (event) {
                 this.seen1 = false
                 this.seen2 = false
                 this.seen3 = false
                 this.seen4 = false
               },

               restart_all(){
                 //iteration1 variables
                   this.message = "",
                   this.isGussed_1 = false,
                   this.result = "",
                   this.GuessingTime = false,
                   this.numTrial = 0,
                   this.correctNum1 = Math.floor(Math.random() * 100),
				   this.disabled = false,
               //iteration2 variables
                   this.isGussed_2 = false,
                   this.result = "",
				   this.correctNum2 = Math.floor(Math.random() * 100),
                   this.absValue = 0,
               //iteration3 variables
                   this.message3 = "Please imput a number between 0 and 99",
                   this.computerOutput = null,
                   this.counterDisplay = 0,
                   this.count = 0,
                   this.mixnum = 0,
                   this.maxnum = 99,
                   this.userNumber3 = null,
                   this.correctNumber3 = null,
                   this.guessNumber = null,
			   //iteration4 variables
					this.message= "Please set a number between 0 and 99, computer is going to guess it.",
					this.computerOutput=null,
					this.counterDisplay=0,
					this.count=0,
					this.mixnum=0,
					this.maxnum=99,
					this.userNumber=null,
					this.correctNumber=null,
					this.guessNumber=0,
					this.absoluteNum=null,
					this.yourReply="",
					this.condition="",
					this.inList = "",
					this.lists = [
						{
						  number:"ready for guessing",
						}
					]
               }
				
            }
        })
