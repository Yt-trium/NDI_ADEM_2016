function Localisation(name, nbplace, longi,lati) 
{
	this.name = name ;
	this.nbplace = nbplace ;
	this.longi = longi;
	this.lati = lati;  
}
	
L.mapbox.accessToken = 'pk.eyJ1Ijoib3ZlcmxvcmQ2OCIsImEiOiJjaXc2dGN3ZWQwMDMyMnlwNTFrdXk0NDNlIn0.E7um_NaZxHbxSQwrxSxMgw';
var map = L.mapbox.map('map-leaflet', 'mapbox.light')
.setView([48.866667, 2.333333], 8);
	
var c1 = new Localisation("Refuge 1",1,2,48.5) ;
var c2 = new Localisation("Refuge 2",18,2.5,49) ;
var c3 = new Localisation("Refuge 3",3,2.3,48) ;
var c4 = new Localisation("Refuge 4",41,2.7,49.5) ;
var c5 = new Localisation("Refuge 5",0,3,48.7) ;
var loc = [c1,c2,c3,c4,c5] ;

for(var i = 0; i < loc.length; i++) 
{
	var marker = L.marker
	(
		[loc[i].lati, loc[i].longi],
		{draggable: false, title: 'Hover Text', opacity: 0.5}
    )
    .addTo(map)
    .bindPopup(loc[i].name +"<br> place dispo : "+ loc[i].nbplace)
}
