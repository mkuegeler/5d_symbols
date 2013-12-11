/**
 * template.js

 * Template library 1.0
 * Michael Kuegeler 12/2013
 * 
 * * Copyright 2013 Michael Kuegeler
 * 
 * this is just a template wto be used for custom libraries
 */
///////////////////////////////////////////////////////////////////////////////
function Symbols ()
{
	
	
	this.xmlns = "http://www.w3.org/2000/svg";
	this.xlinkNS = "http://www.w3.org/1999/xlink"; 	

	this.id = Math.random().toString();
	
	// the parent node of all symbols
	this.layer = document.getElementsByTagName("defs").item(0).id;
	
	// offset used for boundary box position
	this.offset = 0.25;
	
	// grid array
	this.grid = new Array();
	
}
///////////////////////////////////////////////////////////////////////////////
// Global functions used in symbol libraries
///////////////////////////////////////////////////////////////////////////////

Symbols.prototype.setNS = function(value)
{
            this.xmlns = value;
}
Symbols.prototype.getNS = function()
{
            return this.xmlns;
} 
///////////////////////////////////////////////////////////////////////////////

Symbols.prototype.setxlinkNS = function(value)
{
            this.xlinkNS = value;
}
Symbols.prototype.getxlinkNS = function()
{
            return this.xlinkNS;
}

///////////////////////////////////////////////////////////////////////////////

Symbols.prototype.setID = function(value)
{
            this.id = value;
}
Symbols.prototype.getID = function()
{
            return this.id;
}

///////////////////////////////////////////////////////////////////////////////

Symbols.prototype.setLayer = function(value)
{
            this.layer = value;
}
Symbols.prototype.getLayer = function()
{
            return this.layer;
}
///////////////////////////////////////////////////////////////////////////////

Symbols.prototype.setOffset = function(value)
{
            this.offset = value;

}
Symbols.prototype.getOffset = function()
{
            return this.offset;
}

///////////////////////////////////////////////////////////////////////////////
// SUPPORT functions
///////////////////////////////////////////////////////////////////////////////
// Create a "Use" element
///////////////////////////////////////////////////////////////////////////////

Symbols.prototype.use = function(href,transform)
{
	
	var use = document.getElementById(href);	
	
	var use = document.createElementNS(this.getNS(),"use"); 
	    
	    use.setAttributeNS(this.getxlinkNS(),"xlink:href","#"+href); 	    
	    
	    use.setAttribute("transform",transform);	    
					
        document.getElementById(document.getElementsByTagName("svg").item(0).id).appendChild(use);
     
}

///////////////////////////////////////////////////////////////////////////////
// MAIN: Start
// add your custom functions here
///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
// MAIN: End
///////////////////////////////////////////////////////////////////////////////
// initialize the library in SVG file
// get parameters and create initial object canvas
// init can be called in svg root node: onload="new Symbols().init(evt)"
// currently, init() is defined in the svg file directly.
///////////////////////////////////////////////////////////////////////////////
Symbols.prototype.init = function()
{
	
var symbols = new Symbols();

// exampple:
// initialize the object
// symbols.simpleCircleSymbol("symbol_1");

// use object in svg file:
// new Symbols().use("symbol_1","translate(0,0)"); 


}
///////////////////////////////////////////////////////////////////////////////
