var editor;
var language;

var langSelector;

var NODE_TYPE_ELEMENT = 1;
var G = "G".charCodeAt(0);

var prevLangIndex;

function setEditor(eid)
{
	if (editor != null)
	{
		editor.style.display = 'none';
	}
	
	editor = document.getElementById(eid);
	
	editor.setAttribute('transliteration', 'language:' + language);
	editor.style.display = 'inline';
	
	var pagename = document.getElementById('pagename');
	var menuItem = document.getElementById('menu-' + eid);
	
	if (menuItem.innerText)
		pagename.innerHTML = menuItem.innerText;
	else
		pagename.innerHTML = menuItem.textContent;
		
	editor.focus();
	
	if (eid == 'rte')
		document.getElementById('note').style.visibility = 'hidden';
	else
		document.getElementById('note').style.visibility = 'visible';
}

function setLanguage(lang)
{
	language = lang;
	
	if (editor != null)
	{
		editor.setAttribute('transliteration', 'language:' + language);
		editor.focus();
	}
}

function getElementNodes(o, tag)
{
	var elementNodes = new Array();
	
	if (o != null)
	{
		for (var i = 0; i < o.childNodes.length; i++)
		{
			var node = o.childNodes.item(i);
			if (node.nodeType == NODE_TYPE_ELEMENT 
				&& node.nodeName.toUpperCase() == tag.toUpperCase())
			{
				elementNodes[elementNodes.length] = o.childNodes.item(i);
			}
		}
	}
	
	return elementNodes;
}

function getBrowser()
{
	if (navigator.userAgent.indexOf('MSIE') >= 0)
		return 'ie';
	else if (navigator.userAgent.indexOf('Firefox') >= 0)
		return  'firefox';
	else if (navigator.userAgent.indexOf('Opera') >= 0)
		return  'opera';
	
	return '';
}

function initialize()
{
	var menu = document.getElementById('menu');
	var ul = getElementNodes(menu, 'ul')[0];
	var lis = getElementNodes(ul, 'li');
	
	for (var i = 0; i < lis.length; i++)
	{
		var li = lis[i];
		var eid = li.id.substring(5);
		
		var anc = getElementNodes(li, 'a')[0];
		
		if (getBrowser() != 'ie' && eid == 'rte')
			anc.href = "javascript:alert('RichText Editor is currently not supported in this browser');";
		else
			anc.href = "javascript:setEditor('" + eid + "');";

		document.getElementById(eid).style.display = 'none';
	}
	
	var rte = document.getElementById('rte');
	var pte = document.getElementById('pte');
	var ptb = document.getElementById('ptb');
	
	pte.onkeydown = handleToggle;
	ptb.onkeydown = handleToggle;
	
	var selector = document.getElementById('selector');
	langSelector = getElementNodes(selector, 'select')[0];
	langSelector.onchange = function(){setLanguage(langSelector.value); prevLangIndex = null;};
	
	setLanguage(langSelector.value);
}

function handleToggle(event)
{
	if (!event)
		event = window.event;
	
	if (event.ctrlKey && event.keyCode == G)
	{
		if (prevLangIndex != null)
		{
			langSelector.selectedIndex = prevLangIndex;
			setLanguage(langSelector.value);
			prevLangIndex = null;
		}
		else
		{
			prevLangIndex = langSelector.selectedIndex;
			langSelector.selectedIndex = 0;
			setLanguage(langSelector.value);
		}

		if (event.preventDefault)
			event.preventDefault();
		else
			event.returnValue = false;
	}
}
