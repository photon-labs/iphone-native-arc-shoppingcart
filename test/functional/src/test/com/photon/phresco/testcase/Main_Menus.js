#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"


function MainMenus_Test(testname)
{
try
{
	
	clickOnButton("6");
	waitForFewSeconds(3);
	clickOnButton("7");
	TextPresent("No items in your cart");	
	waitForFewSeconds(1);
	clickOnButton("7");	
	waitForFewSeconds(2);
	clickOnButton("8");	
	waitForFewSeconds(2);
	clickOnButton("3");
	waitForFewSeconds(2);
	UIALogger.logPass(testname);
	
}      
catch(err)
{
            UIALogger.logMessage("There is an error") ;
            UIALogger.logFail(testname);
			captureScreenshot(testname); 	
}
  
}

function searchForProduct_Test(testname){
	try
	{
	
		waitForFewSeconds(3);
		searchForProduct(productName);
		waitForFewSeconds(3);
		target.frontMostApp().mainWindow().buttons()[4].tap();
		waitForFewSeconds(3);
		UIALogger.logPass(testname);
	}      
catch(err)
	{
            UIALogger.logMessage("There is an error") ;
            UIALogger.logFail(testname);
			captureScreenshot(testname); 	
}
			
}
MainMenus_Test("MainMenus_Test");
searchForProduct_Test("SearchProduct_Test");