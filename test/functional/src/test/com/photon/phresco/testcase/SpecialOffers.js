
var target = UIATarget.localTarget();

#import "../../../../../main/com/photon/phresco/util/MainActivity.js"
#import "../../../../../main/com/photon/phresco/util/UIElements.js"


function SpecialProd_Review(testname)
{
try
{
	waitForFewSeconds(2);
	clickOnButton("8");
	waitForFewSeconds(3);
	clickOnTableCell(LED3DTV4086);
	waitForFewSeconds(4);
	clickOnScroll("review btn");
	waitForFewSeconds(3);
	clickOnButton("Back");
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



function SpecialProd_Remove(testname)
{
	
try
{
	
	waitForFewSeconds(3);
	clickOnButton("8");
	waitForFewSeconds(2);
	clickOnTableCell(LED3DTV4086);
	waitForFewSeconds(2);
	clickOnScroll("AddToCart");
	waitForFewSeconds(2);
	target.frontMostApp().mainWindow().tableViews()[0].cells()[0].buttons()["remove btn"].tap();
	waitForFewSeconds(2);
	target.frontMostApp().mainWindow().buttons()[0].tap();
	waitForFewSeconds(2);
	target.frontMostApp().mainWindow().scrollViews()[0].buttons()["back btn"].tap();
	waitForFewSeconds(2);
	target.frontMostApp().mainWindow().buttons()["back btn"].tap();
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
function SpecialProd_ReviewOrder(testname)
{
	
try
{
	
	waitForFewSeconds(3);
	clickOnButton("8");
	waitForFewSeconds(2);
	clickOnTableCell(LED3DTV4086);
	waitForFewSeconds(2);
	clickOnScroll("AddToCart");
	waitForFewSeconds(2);
	target.frontMostApp().mainWindow().buttons()["NavigationCart"].tap();
	waitForFewSeconds(3);
	target.frontMostApp().mainWindow().buttons()["CheckOut"].tap();
	waitForFewSeconds(3);
	clickOnTableCell(custInfo);
	waitForFewSeconds(2);
	
	clickOnTableCell(custInfo);
	waitForFewSeconds(2);
	
	clickOnTableCell(delInfo);    
    mainwindow.tableViews()[0].cells()[2].textFields()[0].setValue(add);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[1].setValue(first);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[2].setValue(last);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[3].setValue(company);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[4].setValue(add1);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[5].setValue(add2);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[6].setValue(city);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[7].setValue(state);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[8].setValue(country);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[9].setValue(code);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[10].setValue(phoneno);
    waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[billInfo].tap();
    waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[4].buttons()[checkButton].tap();
    waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[paytMethods].tap(); 
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[6].buttons()[cashButton].tap();
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[oderComm].tap();
	waitForFewSeconds(2);
    var text = mainwindow.tableViews()[0].cells()[8].textViews()[oderTextView].value();
    UIALogger.logMessage("text "+text);
   
    mainwindow.tableViews()[0].cells()[8].textViews()[oderTextView].setValue("Phresco");
    waitForFewSeconds(2);
    mainwindow.buttons()[revieworder].tap(); 
	waitForFewSeconds(2);
	target.frontMostApp().mainWindow().buttons()[6].tap();	
	UIALogger.logPass(testname);
	
}      
catch(err)
{
            UIALogger.logMessage("There is an error") ;
            UIALogger.logFail(testname);
			captureScreenshot(testname); 	
}
  
}

function SpecialProd_CheckOut(testname)
{
	
try
{
	
	
	clickOnButton("8");
	waitForFewSeconds(2);
	clickOnTableCell(LED3DTV4086);
	waitForFewSeconds(2);
	clickOnScroll("AddToCart");
	waitForFewSeconds(2);
	target.frontMostApp().mainWindow().buttons()["NavigationCart"].tap();
	waitForFewSeconds(3);
	target.frontMostApp().mainWindow().buttons()["CheckOut"].tap();
	clickOnTableCell(custInfo);
	waitForFewSeconds(2);
	
	clickOnTableCell(custInfo);
	waitForFewSeconds(2);
	
	clickOnTableCell(delInfo);
waitForFewSeconds(2);    
    mainwindow.tableViews()[0].cells()[2].textFields()[0].setValue(add);
    waitForFewSeconds(2);
	mainwindow.tableViews()[0].cells()[2].textFields()[1].setValue(first);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[2].setValue(last);
    waitForFewSeconds(2);
	mainwindow.tableViews()[0].cells()[2].textFields()[3].setValue(company);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[4].setValue(add1);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[5].setValue(add2);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[6].setValue(city);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[7].setValue(state);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[8].setValue(country);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[9].setValue(code);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[2].textFields()[10].setValue(phoneno);
    waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[billInfo].tap();
	waitForFewSeconds(2);
	mainwindow.tableViews()[0].cells()[4].buttons()[checkButton].tap();
    //clickOncellbutton(checkButton);
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[paytMethods].tap(); 
	waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[6].buttons()[cashButton].tap(); 
	waitForFewSeconds(2);
	//clickOncellbutton(cashButton);
    mainwindow.tableViews()[0].cells()[oderComm].tap();
    waitForFewSeconds(3);
	var text = mainwindow.tableViews()[0].cells()[8].textViews()[oderTextView].value();
    UIALogger.logMessage("text "+text);
    waitForFewSeconds(2);
    mainwindow.tableViews()[0].cells()[8].textViews()[oderTextView].setValue("Phresco");
    waitForFewSeconds(2);
    mainwindow.buttons()[revieworder].tap();
	target.frontMostApp().mainWindow().buttons()["Submit"].tap();
	waitForFewSeconds(2)
	target.frontMostApp().mainWindow().tableViews()[0].cells()["Number"].textFields()[0].tap();
	waitForFewSeconds(2)
	target.frontMostApp().keyboard().typeString("52369874123688");
	waitForFewSeconds(2)
	target.frontMostApp().mainWindow().tableViews()[0].cells()["Expires"].textFields()[0].tap();
	waitForFewSeconds(2)
	target.frontMostApp().keyboard().typeString("1216");
	waitForFewSeconds(3)
	target.frontMostApp().mainWindow().tableViews()[0].cells()["CVV"].textFields()[0].tap();
	waitForFewSeconds(3)
	target.frontMostApp().keyboard().typeString("246");
	waitForFewSeconds(3)
	target.frontMostApp().navigationBar().leftButton().tap();
	waitForFewSeconds(3)
	target.frontMostApp().mainWindow().buttons()[6].tap();
	waitForFewSeconds(3)
	
	UIALogger.logPass(testname);
	
}      
catch(err)
{
            UIALogger.logMessage("There is an error") ;
            UIALogger.logFail(testname);
			captureScreenshot(testname); 	
}
  
}
SpecialProd_Review("SpecialProd_Review");
SpecialProd_Remove("SpecialProd_Remove");
SpecialProd_ReviewOrder("SpecialProd_ReviewOrder");
SpecialProd_CheckOut("SpecialProd_CheckOut");