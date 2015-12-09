class ControlType{
    inputText: string;
    textArea: string;
    email:string;
    checkBox: string;
    radioButton:string;
    dropdownOptions: string;
    fileUpload: string;
    clockControl:string;
    calendarControl: string;
    progressBar: string;
};

class _InputConfig{
    /**
     * For configuration of control
     */
    controlName: string;
    contentType:string;
    validationMessage: string;
    Max: string;
    Min: string;
    label:string;
    defaultInputString:string;
    IsRequired: boolean;
    eMailValidation:string;
   
   constructor(_controlName :string, _contentType: string,validatinM :string, _Max : string, _Min: string, _label: string, dafaultInputS: string, _IsRequired : boolean, _eMailValidation: string){
      
       this.controlName=_controlName;
       this.contentType=_contentType;
       this.label=_label;
       this.Max=_Max;
       this.Min=_Min;
       this.validationMessage=validatinM;
       this.defaultInputString =dafaultInputS;
       this.IsRequired=_IsRequired
       this.eMailValidation=_eMailValidation;

   }
        
};

  var controlConfig=[];
  
function checkInputType(){
 
 // if(controlObject.inputText=="inputText"){
   
      var  data=new _InputConfig("input","string","Hello ","5","4","Name","Please Enter your Adress",true,"No");
       controlConfig.push(data);
       
       data=new _InputConfig("input","number","Hello India","25","10","Age","Please Enter your Name",true,"No");
      console.log(data);
     
      controlConfig.push(data);
       data=new _InputConfig("textarea","string","Hello ","5","4","Address","Please Enter your Adress",true,"No");
       controlConfig.push(data);
       console.log(controlConfig)
         data=new _InputConfig("email","string","Hello ","5","4","Email","Please Enter your Email",true,"No");
       controlConfig.push(data);
        data=new _InputConfig("button","string","Hello ","5","4","Submit","Please Enter your Email",true,"No");
       controlConfig.push(data);
      return controlConfig;
 // }  
    
}


module formControlApp {
	'use strict';

	/**
	 * The main controller for the app. The controller:
	 * - retrieves and persists the model 
	 * - exposes the model to the template and provides event handlers
	 */
	export class formControl {

		// $inject annotation.
		// It provides $injector with information about dependencies to be injected into constructor
		// it is better to have it close to the constructor, because the parameters must match in count and type.
		// See http://docs.angularjs.org/guide/di
		
        // public static $inject = [
		// 	'$scope','service'];
        //     
            
    constructor(private $scope){
    this.$scope=$scope;
    this.$scope.data=checkInputType();
    console.log("Data: "+this.$scope.data);
    }
    
    }
     
};



module formControlApp {
    'use strict';

    var _formControl = angular.module('formControlApp', [])
            .controller('formControl', formControl)
             .directive('ngformControl', function() {
  return {
    restrict: 'AE',
   // require: '^ngCity',
    scope: true,
    template: '<div class="ngformControl"><h4>Application Form </h4></div></br>',
   link: function(scope, iElement, iAttrs) {
     scope.formdata=[];
     console.log("Len"+scope.data.length);
       for (var index = 0; index <scope.data.length; index++) {
         scope.formdata.push(scope.data[index].label);
          if(scope.data[index].controlName=="input")
           {
             if(scope.data[index].contentType=="number"){
            $(iElement)[0].innerHTML+=scope.data[index].label +": <"+scope.data[index].controlName+" type=\"number\"/ min="+scope.data[index].Min+" max="+scope.data[index].Max+" ng-model="+scope.data[index].label+" / ></br>";
            }
            else{
              $(iElement)[0].innerHTML+=scope.data[index].label +": <"+scope.data[index].controlName+" type=\"number\"/ min="+scope.data[index].Min+" max="+scope.data[index].Max+" ng-model="+scope.data[index].label+" / ></br>";
              
            }
            
           }
            if(scope.data[index].controlName=="textarea"){
              $(iElement)[0].innerHTML+=scope.data[index].label +": <input type=\"textarea\"/ min="+scope.data[index].Min+" max="+scope.data[index].Max+" ng-model="+scope.data[index].label+" /></br>";
            }
           if(scope.data[index].controlName=="email"){
               
                $(iElement)[0].innerHTML+=scope.data[index].label +": <input type=\"email\"/ required ng-model="+scope.data[index].label+"/></br>";
           }
             if(scope.data[index].controlName=="button"){
               
               $(iElement)[0].innerHTML+=scope.data[index].label +": <button class=\"k-primary\"/ style=\"min-width: 50px;\"></br>";
           }
          
       } 
          
    

     // $(iElement).innerHTML+=  "<button id=\"primaryTextButton\" class=\"k-primary\">Primary Button</button>";
      
   }
 }
 }

)
};

 //for ( var i = 0 ; i < 2 ; i++ ){ console.log(i); setTimeout( function(){ alert( i ); }, 100 );
//document.body.innerHTML = checkInputType();
