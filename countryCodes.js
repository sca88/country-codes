'use strict';
var countryCodes = require('./countryCodes.json'), Map = require("collections/map");
var countryCodesMap = new Map();

for ( var i = 0, len = countryCodes.length; i < len; i++) {
	var country = countryCodes[i];
	countryCodesMap.set(country.countryName.toLowerCase(), country);
	countryCodesMap.set(country.iso2.toLowerCase(), country);
	countryCodesMap.set(country.iso3.toLowerCase(), country);

	if (country.phoneCode)// because some territories are landless and no phones exist there :-)
		countryCodesMap.set(country.phoneCode.toLowerCase(), country);

	countryCodesMap.set(country, country);
}

var CountryCodes = function() {

};

CountryCodes.getAll = function() {
	return countryCodes;
};

CountryCodes.getCountry = function(param) {
	return (param)?countryCodesMap.get(param.toLowerCase()):undefined;
};

CountryCodes.getISO2 = function(param) {
	if(!param)
		return undefined;
	
	var country = countryCodesMap.get(param.toLowerCase());
	if (country) {
		return country.iso2;
	} else {
		return undefined;
	}
};

CountryCodes.getISO3 = function(param) {
	if(!param)
		return undefined;
	
	var country = countryCodesMap.get(param.toLowerCase());
	if (country) {
		return country.iso3;
	} else {
		return undefined;
	}
};

CountryCodes.getPhoneCode = function(param) {
	if(!param)
		return undefined;
	
	var country = countryCodesMap.get(param.toLowerCase());
	if (country) {
		return country.phoneCode;
	} else {
		return undefined;
	}
};

module.exports = CountryCodes;