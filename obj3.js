function User(name, learner, address) {
    this.name = name;
    this.learner = learner;
    this.address = address;
    this.online = false;

    User.prototype.login = function(){
        this.online = true;
        console.log(this.learner, 'Has Logged in')
    }
    
    User.prototype.logout = function(){
        this.online = false;
        console.log(this.learner, 'Has Logged out')
    }
  }
  
var learnOne = new User("Draco", "Shivam", "Kolkata");
var learnTwo = new User("Leo", "Arun", "Mumbai" );

console.log(learnOne);
console.log(learnTwo);
learnTwo.login();