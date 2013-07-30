#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"




function Login_ValidTest(methodName)
{
	try
		{
			clickOnButton(LoginButton);
			textFields(0, Email_id);
			passwordTextFields(0, password);	
			waitForFewSeconds(2);
			target.frontMostApp().keyboard().typeString("\n");
			//application.keyboard().buttons()[RETURN].tap();
			clickOnButton(login_);
			waitForFewSeconds(2);
			UIATarget.localTarget().logElementTree();    
    		var textValue = mainwindow.staticTexts()[logResult].value();

    
    		if (textValue === logSuccess){ 
    		     UIALogger.logMessage("Login Success") ;       			 
    			}
   			 else{
       			 UIALogger.logFail( "Login Fail" ); 
   			 }
   	 			clickOnButton(okButton);
				waitForFewSeconds(2);    
			 UIALogger.logPass( methodName );
}      
	catch(err)
			{
            UIALogger.logMessage("There is an error") ;
            UIALogger.logFail(methodName);
            if(UIALogger.logError())
            {
               captureScreenshot(methodName); 
            }
}
  
}

function Login_InvalidTest(methodName)
{
	try
		{
			clickOnButton(LoginButton);
			textFields(0, Email_invalid);
			passwordTextFields(0, password);	
			waitForFewSeconds(2);
			target.frontMostApp().keyboard().typeString("\n");
			//application.keyboard().buttons()[RETURN].tap();
			clickOnButton(login_);
			waitForFewSeconds(2);
			UIATarget.localTarget().logElementTree();    
    		var textValue = mainwindow.staticTexts()[logResult].value();

    
    		if (textValue === failed){ 
    		     UIALogger.logMessage("Login failed") ;       			 
    			}
   			 else{
       			 UIALogger.logFail( "Login Fail" ); 
   			 }
   	 			clickOnButton(okButton);
				waitForFewSeconds(2);    
			 UIALogger.logPass( methodName );
}      
	catch(err)
			{
            UIALogger.logMessage("There is an error") ;
            UIALogger.logFail(methodName);
            if(UIALogger.logError())
            {
               captureScreenshot(methodName); 
            }
}
  
}
function Login_InvalidPasswordTest(methodName)
{
	try
		{
			clickOnButton(LoginButton);
			textFields(0, Email_id);
			waitForFewSeconds(2);
			target.frontMostApp().keyboard().typeString("\n");
			//application.keyboard().buttons()[RETURN].tap();
			clickOnButton(login_);
			waitForFewSeconds(2);
			clickOnButton("logCancel");
			//target.frontMostApp().mainWindow().buttons()["logCancel"].tap();
			UIALogger.logPass( methodName );
}      
	catch(err)
			{
            UIALogger.logMessage("There is an error") ;
            UIALogger.logFail(methodName);
            if(UIALogger.logError())
            {
               captureScreenshot(methodName); 
            }
}
  
}

Login_InvalidPasswordTest("Login_InvalidPasswordTest");
Login_InvalidTest("Login_InvalidTest");
Login_ValidTest("Login_ValidTest");
