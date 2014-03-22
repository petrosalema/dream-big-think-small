/*! * * * * * * * * * * * * * * * * * * * * * * * * * *\

    Petrofied
    Copyright (c) 2009-2010, Petro M. Salema
    petro@petrosalema.com

\* * * * * * * * * * * * * * * * * * * * * * * * * * */

var Petrofied = {
	version: '1.7'
};

/**
 * If prop is specified, returns index of prop with value of needle in this
 * Array if successful; otherwise -1
 */
Array.prototype.indexOf = function ( needle, prop )
{
	var l = this.length,
		i = 0;
	
	if ( prop )
	{
		for ( ; i < l; i++ )
			if ( this[i][ prop ] === needle )
				return i;
	}
	else
	{
		for ( ; i < l; i++ )
			if ( this[i] === needle )
				return i;
	}
	
	return -1;
};

/**
 * Removes element needle from array and returns it
 */
Array.prototype.pluck = function ( needle )
{
	var i = this.indexOf( needle ),
		r = this[i];
	this.splice( i, 1 );
	return r;
}

/**
 * Give all functions the ability to return a clone of themselves bound to
 * the variable scope of "object"
 */
Function.prototype.bind = function ()
{
	var args = Util.argsToArray( arguments ),
		object = args.shift(),
		method = this; 
	return function ()
	{ return method.apply( object, args.concat( Util.argsToArray( arguments ) ) ); }
}

/**
 * Similar to "bind" but passes that the event object as first parameter
 */
Function.prototype.bindWithEvent = function ()
{
	var args = Util.argsToArray( arguments ),
		object = args.shift(),
		method = this; 
	return function ( event )
	{ return method.apply( object, [event || window.event].concat( args ) ); }
}

Number.prototype.bound = function ( min, max )
{ return Math.max( ( min || this ), Math.min( ( max || this ), this ) ); }

String.prototype.stripTags = function ()
{ return this.replace( /<\/?[^>]+>/gi, '' ); }

String.prototype.tagsToHTML = function ()
{ return this.replace( '<', '&lt;' ).replace( '>', '&gt;' ); }

/**
 * Will turn "mary had_a little-lamb" to "maryHadALittleLamb"
 */
String.prototype.toCamelCase = function ()
{
	var str = this,
		chunks = str.replace( /-|_/g, ' ' )
					.replace( /\s+/g, ' ' )
					.split( ' ' ),
		camelized = chunks[0],
		i = 1,
		s;
	
	for ( ; i < chunks.length; i++ )
	{
		s = chunks[i];
		camelized += s.substring( 0, 1 ).toUpperCase()
				  +  s.substring( 1, s.length );
	}
	
	return camelized;
}

/**
 * Will turn "mary_had a Little-lamb" to "Mary_Had a Little-Lamb"
 */
String.prototype.toTitleCase = function ()
{
	var str = this,
		odd = /([\s\-_])/g,
		separator = '{-+toTitleChuckGap+-}',
		chunks = str.replace( odd, "$1" + separator ).split( separator ),
		ignore = [ 'to', 'it', 'on', 'the', 'a', 'and', 'or', 'nor', 'of', 'in' ],
		camelized = '',
		i = 0,
		s;
	
	for ( ; i < chunks.length; i++ )
	{
		s = chunks[i];
		camelized += ( ignore.indexOf( s.replace( odd, '' ) ) == -1 )
			? s.substring( 0, 1 ).toUpperCase() + s.substring( 1, s.length )
			: s;
	}
	
	return camelized;
}

String.prototype.trim = function ()
{ return this.replace( /^\s+/, '' ).replace( /\s+$/, '' ); }

function Class ()
{
	var args = Util.argsToArray( arguments ),
		methods = [],
		i = 0;
	
	/* These arguments are Objects which we will combine into a single
		Object */
	for ( ; i < args.length; i++ )
		if ( typeof args[i]  == 'object' )
			methods.push( args[i] );
	
	function _constructor ()
	{
		/* These are the arguments to be passed into the private _initialize
			function called on creation */
		var argsForInit = Util.argsToArray( arguments ),
			i = 0,
			key;
		
		/* Copy all our Objects' methods into _constructor */
		for ( ; i < methods.length; i++ )
			for ( key in methods[i] )
				this[ key ] = methods[i][ key ];
		
		/* Check if we have an _initialize function, if so call it thru
			"apply" and pass argsForInit to it */
		if ( this._initialize && typeof this._initialize == 'function' )
			this._initialize.apply( this, argsForInit );
	}
	
	/* Make sure we're using _constructor as our constructor */
	_constructor.constructor = _constructor;
	
	return _constructor;
}

/* * * * * * * * * * * Util functions * * * * * * * * * * */

/**
 * Create Util namespace
 */
var Util = { };

Util.addClass = function ( el, str )
{
	var rx = new RegExp( '(^|\\s)' + str + '(\\s|$)', 'g' );
	if ( !rx.test( el.className ) )
		el.className += ( el.className == '' ) ? str : ' ' + str;
}

/**
 * Attaches Event Listener for Event ev to Element el 
 */
Util.addEvent = function ( el, ev, fn )
{
	if ( !el )
		return;
	if ( document.addEventListener )
		el.addEventListener( ev, fn, false );
	else if ( document.attachEvent )
		el.attachEvent( 'on' + ev, fn );
}

Util.applyStyle = function ( el, styles )
{
	var camelCase;
	for ( var prop in styles )
	{
		camelCase = prop.replace(
				/\-(\w)/g,
				function( all, letter ) { return letter.toUpperCase(); }
			);
		el.style[ camelCase ] = styles[ prop ];
	}
}

Util.argsToArray = function ( args )
{ return Array.prototype.slice.apply( args ); }

/**
 * Creates and returns DOM element
 */
Util.createElement = function ( tag, content, id, className, context )
{
	var el = ( context || document ).createElement( tag );
	if ( id )
		el.setAttribute( 'id', id );
	if ( className )
		Util.addClass( el, className );
	if ( content )
		el.innerHTML = content;
	return el;
}

/**
 * Disable selecting
 */
Util.disableSelecting = function ( element )
{
	var el = element ||
		   ( document.body || document.getElementByTagName( 'body' )[0] );
	el.onselectstart = function () { return false; };
	el.unselectable = 'on';
	el.style.MozUserSelect = 'none';
	el.style.cursor = 'default';
}

/**
 * Reenable selecting
 */
Util.enableSelecting = function ( element )
{
	var el = element ||
		   ( document.body || document.getElementByTagName( 'body' )[0] );
	el.onselectstart = null;
	el.unselectable = 'off';
	el.style.MozUserSelect = '';
	el.style.cursor = 'auto';
}

Util.getChildAt = function ( box, index )
{
	var child;
	while ( child = box.childNodes[index] )
		if ( child.nodeName == '#text' )
			index++;
		else
			return child;
}

/**
 * Returns an Array of DOMElements containing the className name
 * within the DOMElement parent (if specified).
 * May also be constrained to looking for elements of type tags if specified
 */
Util.getElementsByClassName = function ( name, parent, tags )
{
	var node = parent || document,
		tags = tags ? tags.split( ' ' ) : [ '*' ],
		pattern = new RegExp( '(^|\\s)' + name + '(\\s|$)' ),
		elements = [],
		collection = [],
		results = [],
		i,
		el;
	
	while ( tags.length > 0 )
	{
		collection = node.getElementsByTagName( tags.shift() );
		for ( i = 0; i < collection.length; i++ )
			elements.push( collection[i] );
	}
	
	for ( el in elements )
		if ( pattern.test( elements[ el ].className ) )
			results.push( elements[ el ] );
	
	return results;
}

/**
 * Returns parent Element of property el[k] = v
 */
Util.getElementsByProperties = function ( props, scope, tagName )
{
	var test = false,
		elements = ( scope || document )
					.getElementsByTagName( tagName || '*' ),
		collection = [],
		el,
		i = 0,
		k;
	
	for ( ; i < elements.length; i++ )
	{
		el = elements[i];
		
		for ( k in props )
		{
			if ( typeof( props[k] ) == 'string' )
				test = ( el[k] == props[k] );
			else
				test = props[k].test( el[k] );
			
			if ( !test ) /* If even just one property is false then we might as well forget the rest */
				break;
		}
		
		if ( test ) /* if TRUE we've hit BULLZEYE */
			collection.push( el );
		else
			continue;
	}
	return collection;	
}

Util.getDocHeight = function ()
{ return Util.getDocumentDimensions( 'Height' ); }

Util.getDocWidth = function ()
{ return Util.getDocumentDimensions( 'Width' ); }

Util.getDocumentDimensions = function ( name )
{
	return Math.max(
			document.documentElement[ 'client' + name ],
			document.body[ 'scroll' + name ],
			document.documentElement[ 'scroll' + name ],
			document.body[ 'offset' + name ],
			document.documentElement[ 'offset' + name ]
		);
}

/**
 * Returns and Object containing the x and y values of the cursors position
 */
Util.getMouse = function ( ev )
{
	var x = 0,
		y = 0;
	
	if ( !Util.isIE() )
	{
		x = ev.pageX;
		y = ev.pageY;
	}
	else
	{
		x = window.event.clientX;
		y = window.event.clientY + document.body.scrollTop;
	}
	
	return { x: x, y: y }
}

/**
 * Returns parent Element of property el[k] = v
 */
Util.getParent = function ( el, props )
{ 
	el = el.parentNode;
	
	var test = false,
		k;
	
	while ( el.tagName != undefined )
	{
		for ( k in props )
		{
			if ( typeof( props[k] ) == 'string' )
				test = ( el[k] == props[k] );
			else
				test = props[k].test( el[k] );
			if ( !test )
				break; /* If 1 property is false then we might as well forget the rest */
		}
		
		if ( test )
			break; /* if TRUE we've hit BULLZEYE */
		else
			el = el.parentNode;
	}
	
	return ( ( el.tagName == undefined ) ? null : el );	
}

/**
 *Returns source Element of tagname tag for Event e
 */
Util.getSrc = function ( e, match )
{
	var src = e.target || window.event.srcElement,
		regexp = ( typeof( match ) != 'string' ),
		tag = regexp ? match : match.toLowerCase();
	
	while ( src.tagName != undefined )
	{
		if ( regexp )
			if ( match.test( src.tagName.toLowerCase() ) )
				break;
		
		if ( src.tagName.toLowerCase() == tag )
			break;
		
		src = src.parentNode;
		
		if ( !src )
			break;
	}
	
	if ( !src )
		return null;
	else
		return ( ( src.tagName == undefined ) ? null : src );
}

/**
 * Returns String of Element el's style Property prop
 */
Util.getStyle = function ( el, prop )
{
	var style = '';
	
	try
	{
		if ( el.currentStyle )
		{
			/* Must convert style-side to styleSide for IE */
			prop = prop.toCamelCase();
			style = el.currentStyle[prop];
		}
		else
			style = document.defaultView.getComputedStyle( el, null )
							.getPropertyValue( prop );
	}
	catch( e ) {}
	
	return style;
}

/**
 * Returns an Object containing the window's x and y scroll values
 */
Util.getWindowScroll = function ()
{
	var x = 0,
		y = 0;
	
	if ( typeof ( window.pageYOffset ) == 'number' )
	{
		x = window.pageXOffset;
		y = window.pageYOffset;
	}
	else if ( document.body
			  && ( document.body.scrollLeft || document.body.scrollTop ) )
	{
		x = document.body.scrollLeft;
		y = document.body.scrollTop;
	}
	else if ( document.documentElement
			  && ( document.documentElement.scrollLeft
				   || document.documentElement.scrollTop ) )
	{
		x = document.documentElement.scrollLeft;
		y = document.documentElement.scrollTop;
	}

	return { x: (x || 0), y: (y || 0) }
}

/**
 * Returns an Object containing the height and width of the browser window
 */
Util.getWindowSize = function ()
{
	var w = 0,
		h = 0;
	
	if ( self.innerHeight )
	{
		w = self.innerWidth;
		h = self.innerHeight;
	}
	else if ( document.documentElement
			  && document.documentElement.clientHeight )
	{
		w = document.documentElement.clientWidth;
		h = document.documentElement.clientHeight;
	}
	else if ( document.body )
	{
		w = document.body.clientWidth;
		h = document.body.clientHeight;
	}
	return { width: w, height: h }
}

/**
 * Returns the real top and left values of element's position not its
 * contextual value
 */
Util.globalOffset = function ( element )
{
	var l = 0,
		t = 0;
	
	while ( element )
	{
		l += element.offsetLeft || 0;
		t += element.offsetTop  || 0;
		element = element.offsetParent;
	}
	
	return { left: l, top: t }
}

Util.hasClass = function ( el, str )
{
	var rx = new RegExp( '(^|\\s)' + str + '(\\s|$)', 'g' );
	return rx.test( el.className );
}

/**
 * Checks if object overlaps/intersects target. If three arguments are
 * passed object's t and l will be arguments 0 and 1 and objects w and h
 * will be 0 in order to present a pixel point as opposed to a box.
 */
Util.hitTest = function ()
{
	var a = arguments,
		t = a[2] || a[1],
		o = ( a.length == 3 ) ? { l: a[0], t: a[1], w: 0, h: 0 } : a[0],
		ot = Util.globalOffset(t),
		bt,
		oo,
		bo;
	
	if ( Util.isIE() )
		ot.l -= parseInt( document.body.scrollLeft ); 
	
	ot.w = t.offsetWidth;
	ot.h = t.offsetHeight;
	/* Target bounding box */
	bt = { l: ot.l, r: ot.l + ot.w, t: ot.t, b: ot.t + ot.h }
	
	if ( a.length == 3 )
		oo = o;
	else
	{
		oo = Util.globalOffset( o );
		oo.w = o.offsetWidth;
		oo.h = o.offsetHeight;
	}
	
	/* Object bounding box */
	bo = { l: oo.l, r: oo.l + oo.w, t: oo.t, b: oo.t + oo.h }
	
	return !!( bo.r > bt.l && bo.l < bt.r && bo.b > bt.t && bo.t < bt.b );
}

Util.insertAfter = function ( node, sibling )
{
	if ( sibling.nextSibling )
		sibling.parentNode.insertBefore( node, sibling.nextSibling );
	else
		sibling.parentNode.appendChild( node );
}

Util.isIE = function ()
{ return !( document.getElementById && !document.all ); }

Util.json = function ( data )
{
	var json = false;
	try { json = eval( '(' + data + ')' ); } catch( e ) {}
	return json;
}

/**
 * Removes Event Listener for Event type from Element el
 */
Util.removeEvent = function ( el, type, fn )
{
	if ( !el )
		return;
	
	if ( document.addEventListener )
		el.removeEventListener( type, fn, false );
	else if ( document.attachEvent )
		el.detachEvent('on' + type, fn );
}

Util.removeClass = function ( el, str )
{
	var rx = new RegExp( '(^|\\s)' + str + '(\\s|$)', 'g' );
	el.className = el.className.replace( rx, '$1$2' );
}

/**
 * Removes DOM Node node and returns it
 */
Util.removeNode = function ( node )
{
	var el = ( typeof( node ) == 'string' )
		? document.getElementById( node ) : node;
	el.parentNode.removeChild( el );
	return el;
};

Util.setStyle = function ( el, prop, value )
{
	if ( prop == 'alpha' )
	{
		var a = parseFloat( value )
		el.style.opacity = '' + a;
		el.style.filter = 'alpha(opacity=' + ( a * 100 ) + ')';
	}
	else
		el.style[Util.camelize( prop )] = value;
}

/**
 * For debugging(same as PHP function)
 */
var_dump = function ( obj, name, depth, maxDepths )
{ 
	var maxDepth = maxDepths || 1;
	
	if ( !/(object)|(array)/.test( typeof obj ) || depth > maxDepth )
		return obj;
	
	var map = ( name || '[Object]' ) + ' {\n',
		i,
		o,
		t = '\t',
		depth = depth || 0;
	
	for ( i = 0; i < depth; i++ )
		t += '\t';
	
	depth++;
	
	for ( i in obj )
	{
		o = obj[i];
		
		map += t + i + ' => '
			+ ( /(object)|(array)/.test( typeof o )
				? var_dump( o, null, depth, maxDepth ) : o )
			+ t + '\n';
	}
	
	map += '}';
	
	return map;
}

function $i ( id, doc )
{ return ( doc || document ).getElementById( id ); }

function $t ( tagName, parent )
{ return ( parent || document ).getElementsByTagName( tagName ); }

function $c ( className, parent, elements  )
{ return Util.getElementsByClassName( className, parent, elements ); }



/* * * * * * * * * * * * * * * * * * * * * * *\
 *											 *
 *	AJAX Module								 *
 *	  Copyright (c) 2010, Petro M. Salema	 *
 *	  petro@petrosalema.com					 *
 *											 *
\* * * * * * * * * * * * * * * * * * * * * * */

var Ajax = {
	
	/*
	connections: [
		(priority)	(priority)
			1	=	[ hxr, xhr ],
			2	=	[ xhr ],
			3	=	[ xhr, xhr, xhr ],
			4	=	[ xhr ]
		]
	*/
	connections: [],
	RETRY_DELAY: 1000,
	state:		 'ready',
	
	dispatch: function ( requestId )
	{
		var r		 = Ajax.getXhr( requestId ).request,
			call	 = r.url,
			t		 = r.transport,
			method	 = r.method,
			postdata = r.postdata,
			i		 = 0,
			poststring;
		
		/* If the request is on "busy", then try again in 1 second */
		if ( r.busy )
		{/*
			setTimeout(
					Ajax.dispatch.bind( {}, requestId ), Ajax.RETRY_DELAY
				);
			return;
		*/}
		
		if ( r.fresh )
			call += ( ( r.url.indexOf( '?' ) > -1 ) ? '&' : '?' )
				 + 'rand=' + Math.random();
		
		try
		{
			t.open( method, call, true );
			
			poststring = '';
			
			if ( postdata )
			{
				t.setRequestHeader(
						'Content-Type',
						'application/x-www-form-urlencoded; charset=UTF-8'
					);
				for ( ; i < postdata.length; i++ )
					poststring += '&' + postdata[i][0] + '='
							   + encodeURIComponent( postdata[i][1] );
			}
			
			t.send( poststring );
			
			this.state = 'busy';
			
			t.onreadystatechange = r.callback.bind( r );
			
			t.onabort = function ( requestId, method, postdata, poststring )
			{
				/* Try again ... */
				//Ajax.dispatch( requestId, method, postdata );
				//BAROOHA.modal( 'ABORTED', poststring );
			}.bind( {}, requestId, method, postdata, poststring );
		}
		catch( e )
		{
			r.failed( 'Could not send request' );
			return;
		}
		
		//r.busy = true;
	},
	
	getTransport: function ()
	{
		if ( window.XMLHttpRequest )
			return new XMLHttpRequest();
		else if ( window.ActiveXObject )
			return new ActiveXObject( 'Microsoft.XMLHTTP' );
		else
			return false;
	},
	
	getXhr: function ( requestId )
	{
		var c = Ajax.connections,
			i = 0,
			j;
		
		for ( ; i < c.length; i++ )
			if ( c[i] )
				for ( j = 0; j < c[i].length; j++ )
					if ( c[i][j].id == requestId )
						return c[i][j];
	},
	
	next: function ()
	{
		this.state = 'ready';
		
		var c = this.connections,
			i = 0;
		
		for ( ; i < c.length; i++ )
			if ( c[i] )
				if ( c[i].length )
				{
					this.dispatch( c[i][0].id );
					
					return;
				}
	},
	
	/**
	 * Removes the Ajax request from the lists of connections
	 */
	removeXhr: function ( requestId )
	{
		var c = Ajax.connections,
			i = 0,
			j,
			r;
		
		for ( ; i < c.length; i++ )
			if ( c[i] )
				for ( j = 0; j < c[i].length; j++ )
				{
					r = c[i][j];
					
					if ( r.id == requestId )
					{
						clearTimeout( r.timer );
						
						r.timer		= null;
						r.transport	= null;
						r.request	= null;
						
						c[i].splice( j, 1 );
					}
					
					if ( !c[i].length )
						delete c[i];
					
					return;
				}
	}
	
};

Ajax.Request = Class({
	
	/* * * * * * * * * * Ajax.Request Class * * * * * * * * * */
	
	transporter: null,
	busy:		 false,
	url:		 null,
	oncomplete:	 null,
	canvas:		 null,
	fresh:		 false,
	interval:	 false,
	timer:		 null,
	transport:	 null,
	method:		 null,
	postdata:	 null,
	priority:	 2,
	
	_initialize: function ( url, postdata, oncomplete, fresh, interval,
							priority )
	{
		this.id = ( '' + ( ( new Date() ).getTime() * Math.random() ) )
					.replace( /\./g, '_' );
		this.url		= url;
		this.oncomplete	= oncomplete;
		this.fresh		= fresh	   || false;
		this.interval	= false, //interval || false;
		this.transport	= Ajax.getTransport();
		this.method		= postdata ? 'POST' : 'GET';
		this.postdata	= postdata;
		this.priority	= priority || 2;
		
		if ( this.transport )
		{
			if ( !Ajax.connections[ this.priority ] )
				Ajax.connections[ this.priority ] = [];
			
			Ajax.connections[ this.priority ].push(
					{ id: this.id, request: this }
				);
			
			/* Check if the engine is busy with an item */
			if ( Ajax.state != 'busy' )
				Ajax.dispatch( this.id );
		}
		else
			this.failed( 'Could not create HTTPRequest object' );
	},
	
	callback: function ()
	{
		var t = this.transport;
		
		if ( t.readyState == 4 )
		{
			try
			{
				if ( t.status == 200 )
					this.succeeded();
				else
					this.failed( t.status + ' error!' );
			}
			catch( e )
			{
				this.failed( 'Firefox error: ' + e );
			}
			
			Ajax.next();
		}
	},
	
	failed: function ( msg )
	{
		if ( !/Firefox error/.test( msg ) )
			; //this.modal( 'Request Error', msg );
		
		this.transport.abort();
		
		Ajax.removeXhr( this.id );
	},
	
	succeeded: function ()
	{
		if ( this.oncomplete )
			this.oncomplete( this.transport.responseText );
		
		/* If it's a periodical request, then repeat it after interval
		milliseconds */
		if ( this.interval )
		{
			this.busy = false;
			this.timer = setTimeout(
					Ajax.dispatch.bind( {}, this.id ), this.interval
				);
		}
		else
			Ajax.removeXhr( this.id );
	}
	
}); /* * * * * * * * * * / Ajax.Request Class * * * * * * * * * */


/**
                          )/_
                _.--..---"-,--c_
           \L..' Petrofied ._O__)_ For the eternal glory of Jesus!
   ,-.     _.+  _  \..--( /
     `\.-''__.-' \ (     \_
       `'''       `\__   /\
                   ')
    
*/

// IE5.5+ PNG Alpha Fix v2.0 Alpha: Background Tiling Support
// (c) 2008-2009 Angus Turnbull http://www.twinhelix.com

// This is licensed under the GNU LGPL, version 2.1 or later.
// For details, see: http://creativecommons.org/licenses/LGPL/2.1/

var IEPNGFix = window.IEPNGFix || {};

IEPNGFix.tileBG = function( elm, pngSrc, ready )
{
	// Params: A reference to a DOM element, the PNG src file pathname, and a
	// hidden "ready-to-run" passed when called back after image preloading.
	
	var data = this.data[ elm.uniqueID ],
		elmW = Math.max( elm.clientWidth, elm.scrollWidth ),
		elmH = Math.max( elm.clientHeight, elm.scrollHeight ),
		bgX = elm.currentStyle.backgroundPositionX,
		bgY = elm.currentStyle.backgroundPositionY,
		bgR = elm.currentStyle.backgroundRepeat;
	
	// Cache of DIVs created per element, and image preloader/data.
	if ( !data.tiles )
		data.tiles = {
				elm: elm,
				src: '',
				cache: [],
				img: new Image(),
				old: {}
			};
	
	var tiles = data.tiles,
		pngW = tiles.img.width,
		pngH = tiles.img.height;
	
	if ( pngSrc )
	{
		if ( !ready && pngSrc != tiles.src )
		{
			// New image? Preload it with a callback to detect dimensions.
			tiles.img.onload = function()
			{
				this.onload = null;
				IEPNGFix.tileBG( elm, pngSrc, 1 );
			};
			return tiles.img.src = pngSrc;
		}
	}
	else
	{
		// No image?
		if ( tiles.src ) ready = 1;
		pngW = pngH = 0;
	}
	
	tiles.src = pngSrc;
	
	if ( !ready && elmW == tiles.old.w && elmH == tiles.old.h &&
		 bgX == tiles.old.x && bgY == tiles.old.y && bgR == tiles.old.r )
		return;
	
	// Convert English and percentage positions to pixels.
	var pos = {
			top: '0%',
			left: '0%',
			center: '50%',
			bottom: '100%',
			right: '100%'
		},
		x,
		y,
		pc;
	
	x = pos[ bgX ] || bgX;
	y = pos[ bgY ] || bgY;
	
	if ( pc = x.match( /(\d+)%/ ) )
		x = Math.round( ( elmW - pngW ) * ( parseInt( pc[1] ) / 100 ) );
	
	if ( pc = y.match( /(\d+)%/ ) )
		y = Math.round( ( elmH - pngH ) * ( parseInt( pc[1] ) / 100 ) );
	
	x = parseInt( x );
	y = parseInt( y );
	
	// Handle backgroundRepeat.
	var repeatX = { "repeat": 1, "repeat-x": 1 }[ bgR ],
		repeatY = { "repeat": 1, "repeat-y": 1 }[ bgR ];
	
	if ( repeatX )
	{
		x %= pngW;
		if ( x > 0 ) x -= pngW;
	}
	
	if ( repeatY )
	{
		y %= pngH;
		if ( y > 0 ) y -= pngH;
	}
	
	// Go!
	this.hook.enabled = 0;
	if ( !( { relative: 1, absolute: 1 }[ elm.currentStyle.position ] ) )
		elm.style.position = 'relative';
	
	var count = 0,
		xPos,
		maxX = repeatX ? elmW : x + 0.1,
		yPos,
		maxY = repeatY ? elmH : y + 0.1,
		d,
		s,
		isNew;
	
	if ( pngW && pngH )
	{
		for ( xPos = x; xPos < maxX; xPos += pngW )
		{
			for ( yPos = y; yPos < maxY; yPos += pngH )
			{
				isNew = 0;
				
				if ( !tiles.cache[ count ] )
				{
					tiles.cache[ count ] = document.createElement( 'div' );
					isNew = 1;
				}
				
				var clipR = Math.max( 0, xPos + pngW > elmW ? elmW - xPos : pngW ),
					clipB = Math.max( 0, yPos + pngH > elmH ? elmH - yPos : pngH );
				
				d = tiles.cache[ count ];
				s = d.style;
				s.behavior = 'none';
				s.left = ( xPos - parseInt( elm.currentStyle.paddingLeft ) ) + 'px';
				s.top = yPos + 'px';
				s.width = clipR + 'px';
				s.height = clipB + 'px';
				s.clip = 'rect(' +
					( yPos < 0 ? 0 - yPos : 0 ) + 'px,' +
					clipR + 'px,' +
					clipB + 'px,' +
					( xPos < 0 ? 0 - xPos : 0 ) + 'px)';
				s.display = 'block';
				
				if ( isNew )
				{
					s.position = 'absolute';
					s.zIndex = -999;
					if ( elm.firstChild )
						elm.insertBefore( d, elm.firstChild );
					else
						elm.appendChild( d );
				}
				
				this.fix( d, pngSrc, 0 );
				
				count++;
			}
		}
	}
	
	while ( count < tiles.cache.length )
	{
		this.fix( tiles.cache[ count ], '', 0 );
		tiles.cache[ count++ ].style.display = 'none';
	}
	
	this.hook.enabled = 1;
	
	// Cache so updates are infrequent.
	tiles.old = {
			w: elmW,
			h: elmH,
			x: bgX,
			y: bgY,
			r: bgR
		};
};


IEPNGFix.update = function()
{
	var i, t;
	// Update all PNG backgrounds.
	for ( i in IEPNGFix.data )
	{
		t = IEPNGFix.data[i].tiles;
		if ( t && t.elm && t.src )
			IEPNGFix.tileBG( t.elm, t.src );
	}
};

IEPNGFix.update.timer = 0;

if ( window.attachEvent && !window.opera )
{
	window.attachEvent( 'onresize', function () {
		clearTimeout( IEPNGFix.update.timer );
		IEPNGFix.update.timer = setTimeout( IEPNGFix.update, 100 );
	} );
}



var Uhuru=Uhuru||{};Uhuru.Loaders={};Uhuru.toRad=function(a){return(Math.PI/180)*a};Uhuru.Scene=function(){this.objects=[];this.lights=[];this.add=function(a){switch(a.typeOf){case"Uhuru.Light":this.lights.push(a);this.add(a.lamp);break;case"Uhuru.Skybox":for(var b=0;b<a.planes.length;b++){a.planes[b].typeOf="Uhuru.SkyPlane";this.objects.push(a.planes[b])}break;default:this.objects.push(a);break}}};var Uhuru3D=Class({camera:null,scene:null,renderer:null,width:1024,height:420,mouseRegistery:{down:[],up:[],move:[]},keyRegistery:[],fps:null,callback:null,_initialize:function(b,a){this.width=b||600;this.height=a||400;this.scene=new Uhuru.Scene();this.fps=new Stats(this)},createCamera:function(c,b,d,a,e){this.camera=new Uhuru.Camera(c,b,d,a,e)},onInterval:function(){if(this.callback){this.callback()}this.renderer.renderScene()},onMouseDown:function(b){var c=Util.getMouse(b),a=0;for(;a<this.mouseRegistery.down.length;a++){this.mouseRegistery.down[a](c)}},onMouseUp:function(b){var c=Util.getMouse(b),a=0;for(;a<this.mouseRegistery.up.length;a++){this.mouseRegistery.up[a](c)}},onMouseMove:function(b){var c=Util.getMouse(b),a=0;for(;a<this.mouseRegistery.move.length;a++){this.mouseRegistery.move[a](c)}},onKeyDown:function(b){var a;if(a=this.keyRegistery[b.keyCode]){if(a[0]){a[0]()}}},onKeyUp:function(b){var a;if(a=this.keyRegistery[b.keyCode]){if(a[1]){a[1]()}}},registerCallback:function(a){this.callback=a},registerKeyCode:function(a,c,b){this.keyRegistery[a]=[c,b]},registerMouseEvent:function(b,a){this.mouseRegistery[b].push(a)},start:function(d,c){for(var a=0,e=$c("textNode");a<e.length;a++){e[a].style.display="none"}var b=c||document;Util.addEvent(b,"mousedown",this.onMouseDown.bindWithEvent(this));Util.addEvent(b,"mouseup",this.onMouseUp.bindWithEvent(this));Util.addEvent(b,"mousemove",this.onMouseMove.bindWithEvent(this));Util.addEvent(document,"keydown",this.onKeyDown.bindWithEvent(this));Util.addEvent(document,"keyup",this.onKeyUp.bindWithEvent(this));if(d===true){setInterval(this.onInterval.bind(this),10)}else{this.onInterval()}}});Uhuru.Vector=function(c,b,a,d){this.typeOf="Uhuru.Vector";this.x=c||0;this.y=b||0;this.z=a||0;this.w=d;this.add=function(f,e){this.x=f.x+e.x;this.y=f.y+e.y;this.z=f.z+e.z;if(this.w){this.w=f.w+e.w}return this};this.clone=function(){return new Uhuru.Vector(this.x,this.y,this.z,this.w)};this.copy=function(e){this.x=e.x;this.y=e.y;this.z=e.z;this.w=e.w;return this};this.cross=function(f,e){this.x=(f.y*e.z)-(e.y*f.z);this.y=(f.z*e.x)-(e.z*f.x);this.z=(f.x*e.y)-(e.x*f.y);return this};this.dot=function(e){return this.x*e.x+this.y*e.y+this.z*e.z};this.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)};this.multiply=function(e){this.x*=e;this.y*=e;this.z*=e;return this};this.normalize=function(){var e=this.length();if(e>0){this.multiply(1/e)}else{this.multiply(e)}return this};this.set=function(e,h,g,f){this.x=e||0;this.y=h||0;this.z=g||0;this.w=f;return this};this.sub=function(f,e){this.x=f.x-e.x;this.y=f.y-e.y;this.z=f.z-e.z;return this};this.toString=function(){return this.typeOf+" < "+this.x+", "+this.y+", "+this.z+(this.w?", "+this.w:"")+" >"};this.trace=function(){if(console){console.log(this.toString())}}};Uhuru.Matrix=function(a){this.typeOf="Uhuru.Matrix";this.assign=function(b){this.matrix=[[b[0][0],b[0][1],b[0][2],b[0][3]],[b[1][0],b[1][1],b[1][2],b[1][3]],[b[2][0],b[2][1],b[2][2],b[2][3]],[b[3][0],b[3][1],b[3][2],b[3][3]]]};this.identity=function(){this.matrix=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]};this.multiplyMatrices=function(e,d){var c=e.matrix,h=d.matrix,b=this.matrix,g=c.length,f;for(f=0;f<g;f++){b[f][0]=c[f][0]*h[0][0]+c[f][1]*h[1][0]+c[f][2]*h[2][0]+c[f][3]*h[3][0];b[f][1]=c[f][0]*h[0][1]+c[f][1]*h[1][1]+c[f][2]*h[2][1]+c[f][3]*h[3][1];b[f][2]=c[f][0]*h[0][2]+c[f][1]*h[1][2]+c[f][2]*h[2][2]+c[f][3]*h[3][2];b[f][3]=c[f][0]*h[0][3]+c[f][1]*h[1][3]+c[f][2]*h[2][3]+c[f][3]*h[3][3]}return this};this.multiplyMatrix=function(c){var b=this.matrix,g=c,e=new Array(),f=b.length,d;for(d=0;d<f;d++){e[d]=new Array();e[d][0]=b[d][0]*g[0][0]+b[d][1]*g[1][0]+b[d][2]*g[2][0]+b[d][3]*g[3][0];e[d][1]=b[d][0]*g[0][1]+b[d][1]*g[1][1]+b[d][2]*g[2][1]+b[d][3]*g[3][1];e[d][2]=b[d][0]*g[0][2]+b[d][1]*g[1][2]+b[d][2]*g[2][2]+b[d][3]*g[3][2];e[d][3]=b[d][0]*g[0][3]+b[d][1]*g[1][3]+b[d][2]*g[2][3]+b[d][3]*g[3][3]}this.matrix=e};this.transform=function(c){var b=this.matrix,f=c.x,e=c.y,d=c.z,g=c.w||1;c.x=b[0][0]*f+b[0][1]*e+b[0][2]*d+b[0][3]*g;c.y=b[1][0]*f+b[1][1]*e+b[1][2]*d+b[1][3]*g;c.z=b[2][0]*f+b[2][1]*e+b[2][2]*d+b[2][3]*g;g=b[3][0]*f+b[3][1]*e+b[3][2]*d+b[3][3]*g;if(c.w){c.w=g}else{c.x/=g;c.y/=g;c.z/=g}return c};this.toString=function(){var d=[],b=[],e,c;for(e=0;e<this.matrix.length;e++){for(c=0;c<this.matrix[e].length;c++){d.push(this.matrix[e][c])}b.push("\t| "+d.join(", ")+" |");d=[]}return this.typeOf+" [ \n"+b.join(",\n")+"\n ]"};this.trace=function(){console.log(this.toString())};if(a){this.assign(a)}else{this.identity()}};Uhuru.makeRotateXMatrix=function(c){var b=new Uhuru.Matrix().matrix,a=Uhuru.toRad(c);b[1][1]=b[2][2]=Math.cos(a);b[1][2]=Math.sin(a);b[2][1]=-b[1][2];return b};Uhuru.makeRotateYMatrix=function(c){var b=new Uhuru.Matrix().matrix,a=Uhuru.toRad(c);b[0][0]=b[2][2]=Math.cos(a);b[2][0]=Math.sin(a);b[0][2]=-b[2][0];return b};Uhuru.makeRotateZMatrix=function(c){var b=new Uhuru.Matrix().matrix,a=Uhuru.toRad(c);b[0][0]=b[1][1]=Math.cos(a);b[0][1]=Math.sin(a);b[1][0]=-b[0][1];return b};Uhuru.makeScaleMatrix=function(b,d,c){var a=new Uhuru.Matrix().matrix;a[0][0]=b||1;a[1][1]=d||1;a[2][2]=c||1;return a};Uhuru.makeTranslateMatrix=function(b,d,c){var a=new Uhuru.Matrix().matrix;a[0][3]=b;a[1][3]=d;a[2][3]=c;return a};Uhuru.makeLookAtMatrix=function(c,f,b){var d=new Uhuru.Vector(),a=new Uhuru.Vector(),e=new Uhuru.Vector();e.sub(c,f).normalize();d.cross(b,e).normalize();a.cross(e,d);return new Uhuru.Matrix([[d.x,d.y,d.z,-d.dot(c)],[a.x,a.y,a.z,-a.dot(c)],[e.x,e.y,e.z,-e.dot(c)],[0,0,0,1],])};Uhuru.makePerspectiveMatrix=function(d,g,f,b){var a=f*Math.tan(Uhuru.toRad(d/2)),e=-a,c=a*g,h=e*g;return Uhuru.makeFrustumMatrix(h,c,e,a,f,b)};Uhuru.makeFrustumMatrix=function(h,l,b,k,j,i){var g=2*j/(l-h),e=2*j/(k-b),f=(l+h)/(l-h),d=(k+b)/(k-b),c=-(i+j)/(i-j),a=-2*i*j/(i-j);return new Uhuru.Matrix([[g,0,f,0],[0,e,d,0],[0,0,c,a],[0,0,-1,0]])};Uhuru.Vertex=function(a){this.position=a;this.screen=new Uhuru.Vector();this.isVisible=true};Uhuru.Face=function(j,i,f,e,l,k,h,g){j.typeOf=i;j.a=f;j.b=e;j.c=l;j.d=k;j.uvs=h;j.rgba=g||"rgba( 0, 255, 0, 1.0 )";j.surfaceNormal=new Uhuru.Vector();j.surfaceCenter=new Uhuru.Vector();j.isDoubleSided=false};Uhuru.Face3=function(e,d,h,g,f){Uhuru.Face(this,"Uhuru.Face3",e,d,h,null,g,f)};Uhuru.Face4=function(f,e,j,i,h,g){Uhuru.Face(this,"Uhuru.Face4",f,e,j,i,h,g)};Uhuru.Plane=function(f,e,h,g){this.FRONT=1;this.INTERSECT=0;this.BACK=-1;this.A=f;this.B=e;this.C=h;this.D=g;this.normalize=function(){var a=this.A,d=this.B,c=this.C,b=Math.sqrt(a*a+d*d+c*c);this.A/=b;this.B/=b;this.C/=b;this.D/=b};this.getDistanceFromPoint=function(c){var a=this.A,i=this.B,d=this.C,b=this.D;return(a*c.x)+(i*c.y)+(d*c.z)+b}};Uhuru.Frustum=function(){this.NEAR=0;this.FAR=1;this.LEFT=2;this.RIGHT=3;this.TOP=4;this.BOTTOM=5;this.planes=[];this.planes[this.NEAR]=new Uhuru.Plane();this.planes[this.FAR]=new Uhuru.Plane();this.planes[this.LEFT]=new Uhuru.Plane();this.planes[this.RIGHT]=new Uhuru.Plane();this.planes[this.TOP]=new Uhuru.Plane();this.planes[this.BOTTOM]=new Uhuru.Plane();this.extractPlanesFromMatrix=function(r){var o=r[0][0],l=r[0][1],j=r[0][2],h=r[0][3],x=r[1][0],w=r[1][1],v=r[1][2],u=r[1][3],f=r[2][0],e=r[2][1],d=r[2][2],c=r[2][3],q=r[3][0],p=r[3][1],n=r[3][2],k=r[3][3];var s=this.planes[this.NEAR];s.A=q+f;s.B=p+e;s.C=n+d;s.D=k+c;var a=this.planes[this.FAR];a.A=q-f;a.B=p-e;a.C=n-d;a.D=k-c;var b=this.planes[this.LEFT];b.A=q+o;b.B=p+l;b.C=n+j;b.D=k+h;var t=this.planes[this.RIGHT];t.A=q-o;t.B=p-l;t.C=n-j;t.D=k-h;var i=this.planes[this.TOP];i.A=q+x;i.B=p+w;i.C=n+v;i.D=k+u;var g=this.planes[this.BOTTOM];g.A=q-x;g.B=p-w;g.C=n-v;g.D=k-u};this.testBoundingSphere=function(a){for(var b=0;b<this.planes.length;b++){if(this.planes[b].getDistanceFromPoint(a.screen)<-a.boundingRadius){return false}}return true};this.planeLineIntersect=function(q,p,i){var h=i.matrix.transform(p.position.clone()),g=i.matrix.transform(q.position.clone());var f=(new Uhuru.Vector()).sub(g,h);var k=(Math.abs(q.screen.x)>Math.abs(q.screen.y))?"x":"y";k=(Math.abs(q.screen[k])>Math.abs(q.screen.z))?k:"z";var e;switch(k){case"x":e=2;break;case"y":e=4;break;case"z":e=0;break}if(q.screen[k]<1){e++}var j=this.planes[e],o=j.A,n=j.B,m=j.C,l=j.D;var r=(-l-o*h.x-n*h.y-m*h.z)/((o*g.x-o*h.x)+(n*g.y-n*h.y)+(m*g.z-m*h.z));console.log(r);f.multiply(r);return(new Uhuru.Vector()).add(h,f)}};Uhuru.Object3D=function(f,c){this.typeOf="Uhuru.Object3D";this.showTexture=true;this.isWireframe=false;this.doubleSided=false;this.drawNormals=true;this.shadable=true;this.engine=f;this.screen=new Uhuru.Vector();this.position=new Uhuru.Vector();this.rotation=new Uhuru.Vector();this.scale=new Uhuru.Vector(1,1,1);this.matrix=new Uhuru.Matrix();this.vertices=[];this.faces=[];this.uvs=[];this.boundingRadius=0;this.aabb=null;this.texture=null;this.rgba="rgb( 128, 128, 128 )";var i=this,a=0,d=0,g=0,b=0,e=0,h=0;if(c){this.applyTexture(c,f)}this.updateMatrix=function(){this.matrix.identity();this.matrix.multiplyMatrix(Uhuru.makeTranslateMatrix(this.position.x,this.position.y,this.position.z));this.matrix.multiplyMatrix(Uhuru.makeRotateXMatrix(this.rotation.x));this.matrix.multiplyMatrix(Uhuru.makeRotateYMatrix(this.rotation.y));this.matrix.multiplyMatrix(Uhuru.makeRotateZMatrix(this.rotation.z));this.matrix.multiplyMatrix(Uhuru.makeScaleMatrix(this.scale.x,this.scale.y,this.scale.z))};this.initialize=function(){this.boundingRadius=Math.max(Math.abs(a),d,Math.abs(g),g,Math.abs(e),h);this.aabb=new Uhuru.BoundingBox(a,d,g,b,e,h);this.computeFaceNormals()};this.addFace3=function(m,j,o,n){var k=i.faces.push(new Uhuru.Face3(o,j,m,n,this.rgba));return k-1};this.addUV=function(m,k){var j=i.uvs.push({u:m,v:k});return j-1};this.addVertex=function(j,n,m){if(j<a){a=j}else{if(j>d){d=j}}if(n<g){g=n}else{if(n>b){b=n}}if(m<e){e=m}else{if(m>h){h=m}}var k=i.vertices.push(new Uhuru.Vertex(new Uhuru.Vector(j,n,m)));return k-1};this.computeFaceNormals=function(){var l=0,n,r,q,o,j,p,m,k;for(;l<this.faces.length;l++){n=this.faces[l];r=this.vertices[n.a];q=this.vertices[n.b];o=this.vertices[n.c];k=new Uhuru.Vector((r.position.x+q.position.x+o.position.x)/3,(r.position.y+q.position.y+o.position.y)/3,(r.position.z+q.position.z+o.position.z)/3);j=(new Uhuru.Vector()).sub(r.position,q.position);p=(new Uhuru.Vector()).sub(o.position,q.position);m=(new Uhuru.Vector()).cross(j,p);if(m.length()!=0){m.normalize()}n.surfaceNormal.add(m.multiply(50),k);n.surfaceCenter.copy(k)}};this.onTextureLoaded=function(o,k,n){var j=$i("utilCanvas").getContext("2d"),l=j.canvas.width=k.width,m=j.canvas.height=k.height;this.texture=k;if(n){n.onInterval()}};this.applyTexture=function(o,n){var l=new Image();Util.addEvent(l,"load",this.onTextureLoaded.bindWithEvent(this,l,n));l.src=o;var k=$i("utilCanvas").getContext("2d"),j=k.canvas.width=l.width,m=k.canvas.height=l.height;k.fillStyle="rgb( 0, 0, 0 )";k.fillRect(0,0,j,m)}};Uhuru.BoundingBox=function(a,c,h,b,e,j){this.typeOf="Uhuru.BoundingBox";this.isWireframe=true;this.screen=new Uhuru.Vector();this.vertices=[];this.faces=[];var i=this;var g=function(f,l,k){i.vertices.push(new Uhuru.Vertex(new Uhuru.Vector(f,l,k)))};var d=function(k,f,m,l){i.faces.push(new Uhuru.Face4(l,m,f,k))};g(a,h,e);g(c,h,e);g(c,b,e);g(a,b,e);g(a,h,j);g(c,h,j);g(c,b,j);g(a,b,j);d(0,1,2,3);d(4,7,6,5);d(0,4,5,1);d(1,5,6,2);d(2,6,7,3);d(4,0,3,7)};Uhuru.Mesh=function(m,j,h,g,c){Uhuru.Object3D.call(this);this.typeOf="Uhuru.Mesh";if(c){this.rgba=c}this.center=new Uhuru.Vector();var d,k,a,e,b;for(d=0;d<m.vertices.length;d++){k=m.vertices[d];b=this.addVertex(k[0],k[1],k[2]);this.center.add(this.center,this.vertices[b])}this.center.multiply(1/(this.vertices.length-1));for(d=0;d<m.uvs.length;d++){a=m.uv[d];this.addUV(a[0],a[1])}for(d=0;d<m.faces.length;d++){e=m.faces[d];this.addFace3(e.vertices[2],e.vertices[1],e.vertices[0],e.uv)}this.scale.set(m.scale[0],m.scale[1],m.scale[2]);this.position.set(j,h,g);this.initialize()};Uhuru.Mesh.prototype=new Uhuru.Object3D();Uhuru.Mesh.prototype.constructor=Uhuru.Mesh;Uhuru.Plane3D=function(o,e,g,s,F,x,X,E){Uhuru.Object3D.call(this,o,x);this.typeOf="Uhuru.Plane3d";if(E){this.rgba=E}var N=(s||4)+1,L=(F||4)+1,P=e/s,k=g/F,y=e/2,C=g/2;var O,M;for(M=0;M<L;M++){for(O=0;O<N;O++){this.addVertex((O*P)-y,(M*k)-C,0)}}var R=1,W,V,U,T,H,v,u,r,p,t=N-1,S=L-1;if(X){var I=X[4],Q=X[5];var J=X[0],D=X[2],n=D-J;var K=X[1],q=X[3],G=q-K}if(n&&G&&I>0&&Q>0){var B=I/n,A=Q/G;var m=(I-J-n)/I,l=1+((K-Q)/Q)}else{var B=A=1,m=l=0}for(M=0;M<S;M++){for(O=0;O<t;O++){W=M*N+O;V=M*N+(O+1);U=(M+1)*N+(O+1);T=(M+1)*N+O;v=this.addUV(1-((O+0)/t/B)-m,(M/S/A)+l);u=this.addUV(1-((O+1)/t/B)-m,(M/S/A)+l);r=this.addUV(1-((O+1)/t/B)-m,((M+1)/S/A)+l);p=this.addUV(1-((O+0)/t/B)-m,((M+1)/S/A)+l);if((R*=-1)>0){this.addFace3(W,T,U,[r,p,v]);this.addFace3(W,U,V,[u,r,v])}else{this.addFace3(W,T,V,[u,p,v]);this.addFace3(T,U,V,[u,r,p])}}}this.initialize()};Uhuru.Plane3D.prototype=new Uhuru.Object3D();Uhuru.Plane3D.prototype.constructor=Uhuru.Plane3D;Uhuru.Cube=function(s,m,l,t,d,q){Uhuru.Object3D.call(this,s,d);this.typeOf="Uhuru.Cube";if(q){this.rgba=q}var e=m/2,c=l/2,n=t/2;var b=1,a=0,p=0,o=1,k=this.addUV(1-p,1-b),j=this.addUV(1-o,1-b),h=this.addUV(1-o,1-a),g=this.addUV(1-p,1-a);var i=this.addVertex,r=this.addFace3;i(e,c,-n);i(e,-c,-n);i(-e,-c,-n);i(-e,c,-n);i(e,c,n);i(e,-c,n);i(-e,-c,n);i(-e,c,n);r(0,1,2,[k,j,h]);r(2,3,0,[h,g,k]);r(4,7,6,[k,j,h]);r(6,5,4,[h,g,k]);r(0,4,5,[k,j,h]);r(5,1,0,[h,g,k]);r(1,5,6,[k,j,h]);r(6,2,1,[h,g,k]);r(2,6,7,[k,j,h]);r(7,3,2,[h,g,k]);r(4,0,3,[k,j,h]);r(3,7,4,[h,g,k]);this.initialize()};Uhuru.Cube.prototype=new Uhuru.Object3D();Uhuru.Cube.prototype.constructor=Uhuru.Cube;Uhuru.Sphere=function(f,A,h,w,o,v){Uhuru.Object3D.call(this,f,o);this.typeOf="Uhuru.Sphere";if(v){this.rgba=v}var H=h||8,F=w||6;var I,G;var l=Math.max(3,H),L=Math.max(2,F);var J=[];for(G=0;G<(L+1);G++){var n=G/L,x=A*Math.cos(n*Math.PI),u=A*Math.sin(n*Math.PI),D=[],r=0;for(I=0;I<l;I++){var m=2*I/l,z=u*Math.sin(m*Math.PI),y=u*Math.cos(m*Math.PI);if(!((G==0||G==L)&&I>0)){r=this.addVertex(y,x,z)}D.push(r)}J.push(D)}var p=J.length;for(G=0;G<p;G++){var q=J[G].length;if(G>0){for(I=0;I<q;I++){var k=(I==(q-1)),e=J[G][k?0:I+1],d=J[G][k?q-1:I],c=J[G-1][k?q-1:I],b=J[G-1][k?0:I+1],t=G/(p-1),s=(G-1)/(p-1),E=(I+1)/q,C=I/q,g=this.addUV(1-E,1-t),a=this.addUV(1-C,1-t),K=this.addUV(1-C,1-s),B=this.addUV(1-E,1-s);if(G<(J.length-1)){this.addFace3(e,d,c,[K,a,g])}if(G>1){this.addFace3(e,c,b,[B,K,g])}}}}this.initialize()};Uhuru.Sphere.prototype=new Uhuru.Object3D();Uhuru.Sphere.prototype.constructor=Uhuru.Sphere;Uhuru.Camera=function(c,b,d,a,e){this.position=new Uhuru.Vector(0,0,0);this.up=new Uhuru.Vector(0,1,0);this.target=new Uhuru.Vector(0,0,1);this.pitch=0;this.yaw=0;this.roll=0;this.projectionMatrix=Uhuru.makePerspectiveMatrix(c,b,d,a);this.matrix=new Uhuru.Matrix();this.frustum=new Uhuru.Frustum();this.stride=e||5;this.move=function(f){var h=this.stride,g=(new Uhuru.Vector()).sub(this.position,this.target).normalize();switch(f){case"zero":this.position.set(0,0,100);this.target.set(0,0,100);break;case"n":g.multiply(h);this.position.sub(this.position,g);this.target.sub(this.target,g);break;case"s":g.multiply(-h);this.position.sub(this.position,g);this.target.sub(this.target,g);break;case"w":g.cross(g.clone(),this.up).multiply(-h);this.position.sub(this.position,g);this.target.sub(this.target,g);break;case"e":g.cross(g.clone(),this.up).multiply(h);this.position.sub(this.position,g);this.target.sub(this.target,g);break}};this.rotate=function(j,i){var h=10,g,f;this.yaw+=j;this.pitch+=i;this.pitch=Math.max(-89,Math.min(89,this.pitch));g=Uhuru.toRad(this.yaw);f=Uhuru.toRad(this.pitch);this.target.x=this.position.x+(h*Math.cos(f)*Math.sin(g));this.target.y=this.position.y+(h*Math.sin(f));this.target.z=this.position.z+(h*Math.cos(f)*Math.cos(g))};this.updateMatrix=function(){this.matrix.assign(Uhuru.makeLookAtMatrix(this.position,this.target,this.up).matrix)}};Uhuru.Renderer=function(b,e,d,a,c){this.fillColor="rgb( 74, 74, 74 )";this.ambientLightFactor=0.1;this.applyStyle=function(f,g){for(var h in g){f.style[h]=g[h]}};this.clearGrid=true;this.showFaces=true;this.showTextures=true;this.showAxes=false;this.showNormals=false;this.showBoundingBoxes=false;this.showWireframes=false;this.scene=e;this.camera=d;this.canvas=b;if(!this.canvas||!this.canvas.getContext){return}this.applyStyle(this.canvas,{position:"relative",top:0,left:0,width:a+"px",height:c+"px",border:"0px solid #555"});this.context=this.canvas.getContext("2d");this.context.canvas.width=this.width=this.canvas.offsetWidth;this.context.canvas.height=this.height=this.canvas.offsetHeight;this.halfWidth=this.width/2;this.halfHeight=this.height/2;this.renderList=[];this.viewProjectionMatrix=new Uhuru.Matrix();this.modelViewProjectionMatrix=new Uhuru.Matrix();this.r360=Uhuru.toRad(360);this.project=function(N,K){this.renderList=[];K.updateMatrix();var H,E,M,I,O,w,P,L,t,n,m,k,i,q,F,J,p=this.scene.lights[0].lamp.position.clone(),D=false;this.viewProjectionMatrix.multiplyMatrices(K.projectionMatrix,K.matrix);K.frustum.extractPlanesFromMatrix(this.viewProjectionMatrix.matrix);for(H=0;H<N.objects.length;H++){P=N.objects[H];P.updateMatrix();this.modelViewProjectionMatrix.multiplyMatrices(this.viewProjectionMatrix,P.matrix);P.screen=this.viewProjectionMatrix.transform(P.position.clone());if(P.isLight){P.world.copy(P.position);this.modelViewProjectionMatrix.transform(P.world);if(P.screen.z>0&&P.screen.z<1){this.renderList.push({pos:{x:P.screen.x,y:P.screen.y},screenZ:P.screen.z,color:P.color,typeOf:"Uhuru.Light"})}continue}for(E=0,O=P.vertices.length;E<O;E++){L=P.vertices[E];L.screen=this.modelViewProjectionMatrix.transform(L.position.clone());L.isVisible=(L.screen.z>0&&L.screen.z<1||P.typeOf=="Uhuru.SkyPlane")}for(M=0,w=P.faces.length;M<w;M++){t=P.faces[M];n=P.vertices[t.a];m=P.vertices[t.b];k=P.vertices[t.c];uvs=[P.uvs[t.uvs[0]],P.uvs[t.uvs[1]],P.uvs[t.uvs[2]]];D=!(((k.screen.x-n.screen.x)*(m.screen.y-n.screen.y))-((k.screen.y-n.screen.y)*(m.screen.x-n.screen.x))>0);if(P.doubleSided||!D){F=[];J=[];(n.isVisible?F:J).push(n);(m.isVisible?F:J).push(m);(k.isVisible?F:J).push(k);if(F.length==3){this.pushFaceIntoRenderList(n.screen,m.screen,k.screen,uvs,t,P,p,D)}else{if(F.length>0&&1==0){var j,h,g;if(F.length<J.length){j=F[0];h=J[0];g=J[1]}else{j=J[0];h=F[0];g=F[1]}var C=K.frustum.planeLineIntersect(j,h,P);var B=K.frustum.planeLineIntersect(j,g,P);this.viewProjectionMatrix.transform(C);this.viewProjectionMatrix.transform(B);this.pushFaceIntoRenderList(C,h.screen,g.screen,uvs,t,P,p);this.pushFaceIntoRenderList(C,B,g.screen,uvs,t,P,p)}}}}if(this.showBoundingBoxes){for(E=0,O=P.aabb.vertices.length;E<O;E++){L=P.aabb.vertices[E];L.screen=this.modelViewProjectionMatrix.transform(L.position.clone());L.isVisible=(L.screen.z>0&&L.screen.z<1)}for(M=0,w=P.aabb.faces.length;M<w;M++){t=P.aabb.faces[M];n=P.aabb.vertices[t.a];m=P.aabb.vertices[t.b];k=P.aabb.vertices[t.c];i=P.aabb.vertices[t.d];if(n.isVisible&&m.isVisible&&k.isVisible&&i.isVisible){faceZ=Math.max(n.screen.z,Math.max(m.screen.z,Math.max(k.screen.z,i.screen.z)));this.renderList.push({v1:{x:n.screen.x,y:n.screen.y},v2:{x:m.screen.x,y:m.screen.y},v3:{x:k.screen.x,y:k.screen.y},v4:{x:i.screen.x,y:i.screen.y},screenZ:faceZ,fillColor:P.aabb.isWireframe?false:t.rgba,lineColor:P.aabb.isWireframe?"rgba( 255, 255, 255, 1 )":false,typeOf:t.typeOf})}}}if(this.showAxes){var G=P.boundingRadius,A=(new Uhuru.Vector(1,0,0)).multiply(G),u=(new Uhuru.Vector(0,-1,0)).multiply(G),s=(new Uhuru.Vector(0,0,1)).multiply(G);this.modelViewProjectionMatrix.transform(A);this.modelViewProjectionMatrix.transform(u);this.modelViewProjectionMatrix.transform(s);if(A.z>0&&A.z<1){this.renderList.push({v1:{x:P.screen.x,y:P.screen.y},v2:{x:A.x,y:A.y},screenZ:0,color:"rgba( 255, 0, 0, 0.5 )",typeOf:"Uhuru.Line",textNode:P.textNodeX})}if(u.z>0&&u.z<1){this.renderList.push({v1:{x:P.screen.x,y:P.screen.y},v2:{x:u.x,y:u.y},screenZ:0,color:"rgba( 0, 255, 0, 0.5 )",typeOf:"Uhuru.Line",textNode:P.textNodeY})}if(s.z>0&&s.z<1){this.renderList.push({v1:{x:P.screen.x,y:P.screen.y},v2:{x:s.x,y:s.y},screenZ:0,color:"rgba( 0, 0, 255, 0.5 )",typeOf:"Uhuru.Line",textNode:P.textNodeZ})}}}};this.renderScene=function(){var m=this.context,I=0,x,i,L=this.halfWidth,n=this.halfHeight,N,K,s,M,p,B,J,o,z,u,F,h,t,E,g;if(this.clearGrid){m.fillStyle=this.fillColor;m.fillRect(0,0,this.width,this.height)}this.project(this.scene,this.camera);this.renderList.sort(this.sortRenderList);for(x=this.renderList.length;I<x;I++){i=this.renderList[I];if(i.typeOf=="Uhuru.Face3"){u=(i.v1.x*L)+L,F=(i.v2.x*L)+L,h=(i.v3.x*L)+L,t=(i.v1.y*n)+n,E=(i.v2.y*n)+n,g=(i.v3.y*n)+n;if(N=i.texture){K=N.width;s=N.height;M=i.uvs[0].u*K;p=i.uvs[1].u*K;B=i.uvs[2].u*K;J=i.uvs[0].v*s;o=i.uvs[1].v*s;z=i.uvs[2].v*s,this.drawAffineTexturedTriangle(i.texture,u,F,h,t,E,g,M,p,B,J,o,z)}else{m.beginPath();m.moveTo(u,t);m.lineTo(F,E);m.lineTo(h,g);if(i.typeOf=="Uhuru.Face4"){m.lineTo((i.v4.x*L)+L,(i.v4.y*n)+n)}m.lineTo(u,t);if(i.fillColor){m.fillStyle=i.fillColor;m.fill()}}if(i.lineColor){m.lineWidth=0.5;m.strokeStyle="rgba( 255, 255, 255, 0.5 )";m.stroke()}m.lineWidth=0.5;m.strokeStyle="rgba( 0, 0, 0, "+(i.shade/2)+" )";m.fillStyle="rgba( 0, 0, 0, "+i.shade+" )";m.stroke();m.fill();if(this.showNormals&&i.drawNormals){var D=(i.surfaceNormal.x*L)+L,C=(i.surfaceNormal.y*n)+n,r=(i.surfaceCenter.x*L)+L,q=(i.surfaceCenter.y*n)+n;m.beginPath();m.lineWidth=1;m.strokeStyle="rgba( 255, 255, 255, 0.5 )";m.moveTo(r,q);m.lineTo(D,C);m.stroke();m.beginPath();m.fillStyle="rgba( 255, 0, 0, 0.5 )";m.arc(r,q,2,this.r360,0,true);m.fill();m.stroke();m.beginPath();m.fillStyle=i.rgba;m.arc(D,C,5,this.r360,0,true);m.fill();m.stroke();var w=(i.lightRay.x*L)+L,v=(i.lightRay.y*n)+n;m.beginPath();m.strokeStyle="rgba( 255, 255, 0, 0.5 )";m.moveTo(r,q);m.lineTo(w,v);m.stroke()}}else{if(i.typeOf=="Uhuru.Light"){var A=(i.pos.x*L)+L,y=(i.pos.y*n)+n;m.beginPath();m.lineWidth=0;var k=Math.abs((i.screenZ*100)-100);A+=(Math.random()*2*k);y+=(Math.random()*2*k);var f=m.createRadialGradient(A,y,50*k,A,y,1000*k+(Math.random()*20*k));f.addColorStop(0,"rgba( 255, 255, 255, 0.8 )");f.addColorStop(0.1,"rgba( "+i.color+", 0.4 )");f.addColorStop(1,"rgba( "+i.color+", 0.0 )");m.fillStyle=f;m.arc(A,y,1000*k,this.r360,0,true);m.fill();m.beginPath();m.fillStyle="rgba( "+i.color+", 0.2 )";m.arc(A,y,50*k,this.r360,0,true);m.fill()}else{if(i.typeOf=="Uhuru.Line"){var H=(i.v1.x*L)+L,l=(i.v1.y*n)+n,G=(i.v2.x*L)+L,j=(i.v2.y*n)+n;m.beginPath();m.lineWidth=1;m.strokeStyle=i.color;m.moveTo(H,l);m.lineTo(G,j);if(i.textNode){i.textNode.style.left=G+"px";i.textNode.style.top=j+"px"}m.stroke()}}}}};this.sortRenderList=function(g,f){return f.screenZ-g.screenZ};this.drawAffineTexturedTriangle=function(z,o,u,h,n,t,f,w,k,s,v,j,r){var i=this.context,g,y,x,m,l,q,p;i.beginPath();i.moveTo(o,n);i.lineTo(u,t);i.lineTo(h,f);i.lineTo(o,n);i.closePath();i.save();i.clip();g=w*(r-j)-k*r+s*j+(k-s)*v;y=-(v*(h-u)-j*h+r*u+(j-r)*o)/g;x=(j*f+v*(t-f)-r*t+(r-j)*n)/g;m=(w*(h-u)-k*h+s*u+(k-s)*o)/g;l=-(k*f+w*(t-f)-s*t+(s-k)*n)/g;q=(w*(r*u-j*h)+v*(k*h-s*u)+(s*j-k*r)*o)/g;p=(w*(r*t-j*f)+v*(k*f-s*t)+(s*j-k*r)*n)/g;i.setTransform(y,x,m,l,q,p);i.drawImage(z,0,0);i.restore()};this.flatShadeFace=function(i,h,g){var f=g.dot(i)/(g.length()*i.length());if(f<0){f=0}f=Math.min(f+this.ambientLightFactor,1);f=1-f;if(this.showNormals){this.camera.projectionMatrix.transform(this.camera.matrix.transform(g));this.camera.projectionMatrix.transform(this.camera.matrix.transform(h));if(this.scene.lights.length){i=this.scene.lights[0].lamp.screen.clone()}}return f};this.pushFaceIntoRenderList=function(r,p,n,j,m,h,l,g){var k=new Uhuru.Vector(),i=new Uhuru.Vector(),q=new Uhuru.Vector(),o=0,f=Math.max(r.z,Math.max(p.z,n.z));if(this.scene.lights.length){k=h.matrix.transform(m.surfaceCenter.clone());i=h.matrix.transform(m.surfaceNormal.clone());i=i.sub(k,i);q=q.sub(k,l)}if(h.typeOf=="Uhuru.SkyPlane"||(!this.showFaces&&(!this.showTexures||!h.texture))){o=0}else{if(h.shadable!==false){o=this.flatShadeFace(q,k,g?i.clone().multiply(-1):i)}}this.renderList.push({typeOf:m.typeOf,v1:{x:r.x,y:r.y},v2:{x:p.x,y:p.y},v3:{x:n.x,y:n.y},uvs:j,surfaceNormal:i,surfaceCenter:k,drawNormals:h.drawNormals,lightRay:q,shade:o,screenZ:f,texture:this.showTextures&&h.texture&&!(g&&h.showBackColor)?h.texture:false,fillColor:this.showFaces&&(!g||h.showBackColor)?m.rgba:false,lineColor:h.isWireframe||this.showWireframes?m.rgba:false})}};Uhuru.ObjLoader=function(c,b,a,f,e,d){Uhuru.Object3D.call(this,d);this.typeOf="Uhuru.ObjMesh";this.center=new Uhuru.Vector();this.position.set(a,f,e);this.parseFile=function(m){this.addVertex(0,0,0);this.uvs.push([0,0]);var r=m.split(/[\n\r]/),k=[],n=0,j=r.length,p;for(;n<j;n++){k=r[n].replace(/\s{2,}/," ").split(" ");switch(k.shift()){case"g":break;case"f":var h,g,q,o=0;while(o<k.length-2){h=this.splitFaceElement(k[0]);g=this.splitFaceElement(k[++o]);q=this.splitFaceElement(k[o+1]);if(h){this.addFace3(parseInt(q[0]),parseInt(g[0]),parseInt(h[0]),[parseInt(h[1]),parseInt(g[1]),parseInt(q[1])])}}break;case"o":break;case"s":break;case"usemtl":break;case"v":p=this.addVertex(-k[0],-k[1],-k[2]);this.center.add(this.center,this.vertices[p]);break;case"vt":this.addUV(parseFloat(k[0]),parseFloat(k[1]));break;case"vn":break;case"#":break}}if(d){this.applyTexture(d)}this.center.multiply(1/(this.vertices.length-1));this.initialize();c.scene.add(this)};this.splitFaceElement=function(g){if(g==null){return null}if(g.indexOf("/")==-1){return[g]}return g.split("/")};this.load=function(g){var h=new Ajax.Request(g,null,this.parseFile.bind(this))};this.load(b)};Uhuru.ObjLoader.prototype=new Uhuru.Object3D();Uhuru.ObjLoader.prototype.constructor=Uhuru.ObjLoader;var Stats=Class({engineInstance:null,timeNow:0,timeDelta:0,timeOfLastSecond:0,frames:0,container:null,_initialize:function(a){this.container=Util.createElement("div","","stats");this.container.style.position="absolute";$t("body")[0].appendChild(this.container);this.engineInstance=a},update:function(){this.timeNow=(new Date()).getTime();this.timeDelta=this.timeNow-this.timeOfLastSecond;if(this.timeDelta>=1000){var a=0,b=0;for(;b<this.engineInstance.scene.objects.length;b++){a+=this.engineInstance.scene.objects[b].vertices.length}this.container.innerHTML="fps: "+this.frames+"<br /># vertices: "+a+"<br /># visible polygons: "+this.engineInstance.renderer.renderList.length;this.frames=0;this.timeOfLastSecond=this.timeNow}else{this.frames++}}});Uhuru.Light=function(b,c,a,e,d){this.typeOf="Uhuru.Light";this.position=new Uhuru.Vector(a,e,d);this.luminosity=c;this.color=b;this.lamp=new Uhuru.Cube(10,10,10,null,null,"rgba( "+b[0]+", "+b[1]+", "+b[2]+", 1.0 )");this.lamp.position.set(a,e,d);this.drawNormals=false;this.lamp.isLight=true;this.lamp.screen=new Uhuru.Vector();this.lamp.world=new Uhuru.Vector();this.lamp.color=b[0]+", "+b[1]+", "+b[2]};Uhuru.Skybox=function(l,a,i,f){Uhuru.Object3D.call(this);this.typeOf="Uhuru.Skybox";var n=0,e=1,c=2,j=3,d=4,k=5,m=1024,g=828,o=a*2,b;this.planes=[];b=this.planes[n]=new Uhuru.Plane3D(l,o,o,i,i,f,[256,256,512,512,m,g]);b.position.z=-a;b.rotation.y=180;b=this.planes[e]=new Uhuru.Plane3D(l,o,o,i,i,f,[768,256,1024,512,m,g]);b.position.z=a;b.rotation.y=360;b=this.planes[c]=new Uhuru.Plane3D(l,o,o,i,i,f,[0,256,256,512,m,g]);b.position.x=-a;b.rotation.y=90;b=this.planes[j]=new Uhuru.Plane3D(l,o,o,i,i,f,[512,256,768,512,m,g]);b.position.x=a;b.rotation.y=270;b=this.planes[d]=new Uhuru.Plane3D(l,o,o,i,i,f,[256,0,512,256,m,g]);b.position.y=-a;b.rotation.x=270;b.rotation.z=180;b=this.planes[k]=new Uhuru.Plane3D(l,o,o,i,i,f,[256,512,512,768,m,g]);b.position.y=a;b.rotation.x=90;b.rotation.z=180;this.initialize()};Uhuru.Skybox.prototype=new Uhuru.Object3D();Uhuru.Skybox.prototype.constructor=Uhuru.Skybox;Uhuru.Skybox2=function(j,a,g,e){Uhuru.Object3D.call(this);this.typeOf="Uhuru.Skybox";var l=0,f=1,c=2,h=3,d=4,i=5,b,m=a*2,k=".jpg";this.planes=[];b=this.planes[l]=new Uhuru.Plane3D(j,m,m,g,g,e+"front"+k);b.position.z=-a;b.rotation.y=180;b=this.planes[f]=new Uhuru.Plane3D(j,m,m,g,g,e+"back"+k);b.position.z=a;b.rotation.y=360;b=this.planes[c]=new Uhuru.Plane3D(j,m,m,g,g,e+"left"+k);b.position.x=-a;b.rotation.y=90;b=this.planes[h]=new Uhuru.Plane3D(j,m,m,g,g,e+"right"+k);b.position.x=a;b.rotation.y=270;b=this.planes[d]=new Uhuru.Plane3D(j,m,m,g,g,e+"top"+k);b.position.y=-a;b.rotation.x=270;b=this.planes[i]=new Uhuru.Plane3D(j,m,m,g,g,e+"bottom"+k);b.position.y=a;b.rotation.x=90;this.initialize()};Uhuru.Skybox2.prototype=new Uhuru.Object3D();Uhuru.Skybox2.prototype.constructor=Uhuru.Skybox2;Uhuru.Terrain=function(h,a,i,g,d,c,j,f,e,b){Uhuru.Object3D.call(this,h,c);this.typeOf="Uhuru.Terrain";if(b){this.rgba=b}this.generateMesh=function(){var k=new Image();Util.addEvent(k,"load",this.onHeightMapLoaded.bind(this,k));k.src=f};this.onHeightMapLoaded=function(p){var B=$i("utilCanvas").getContext("2d"),D=B.canvas.width=p.width,o=B.canvas.height=p.height,W;B.drawImage(p,0,0);W=B.getImageData(0,0,D,o).data;var Q=(g||4)+1,O=(d||4)+1,S=a/g,k=i/d,y=a/2,F=i/2,L,H=e/2,t=Math.floor(D/g),A=Math.floor(o/d);var R,P;for(P=0;P<O;P++){for(R=0;R<Q;R++){L=(((P*t)*D)+(R*A))*4;T=e*(W[L+0]/255);this.addVertex((P*k)-F,-T,(R*S)-y)}}var U=1,aa,Z,Y,X,J,x,v,s,q,u=Q-1,V=O-1;if(j){var K=j[4],T=j[5];var M=j[0],G=j[2],n=G-M;var N=j[1],r=j[3],I=r-N}if(n&&I&&K>0&&T>0){var E=K/n,C=T/I;var m=(K-M-n)/K,l=1+((N-T)/T)}else{var E=C=1,m=l=0}for(P=0;P<V;P++){for(R=0;R<u;R++){aa=P*Q+R;Z=P*Q+(R+1);Y=(P+1)*Q+(R+1);X=(P+1)*Q+R;x=this.addUV(1-((R+0)/u/E)-m,(P/V/C)+l);v=this.addUV(1-((R+1)/u/E)-m,(P/V/C)+l);s=this.addUV(1-((R+1)/u/E)-m,((P+1)/V/C)+l);q=this.addUV(1-((R+0)/u/E)-m,((P+1)/V/C)+l);if((U*=-1)>0){this.addFace3(aa,X,Y,[s,q,x]);this.addFace3(aa,Y,Z,[v,s,x])}else{this.addFace3(aa,X,Z,[v,q,x]);this.addFace3(X,Y,Z,[v,s,q])}}}this.initialize()};this.generateMesh()};Uhuru.Terrain.prototype=new Uhuru.Object3D();Uhuru.Terrain.prototype.constructor=Uhuru.Terrain;
