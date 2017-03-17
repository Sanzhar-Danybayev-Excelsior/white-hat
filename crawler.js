                                                                                                                        
var casper = require('casper').create();                                                                                
var siteToVisit = "URL";
                                                                                                                        
casper.start();                                                                                                         
                                                                                                                        
for(i=0;i<100;i++){                                                                                                     
   console.log(i);                                                                                                      
   casper.thenOpen(siteToVisit, function() {                                                                            
        this.echo(this.getTitle());
        this.click('.buttonToClick');                                                                           
    });                                                                                                                 
                                                                                                                        
}                                                                                                                       
                                                                                                                        
casper.run();                                                                                                           
                                                                                                                        
                                                                                                                        
                                                                                                                        
