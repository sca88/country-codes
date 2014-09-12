var CountryCodes = require("./countryCodes");
var assert = require('assert');

describe('countryCodes', function(){
	it('should return all country details', function(){
		assert.equal(true, CountryCodes.getAll().length == 237);
	});
	
	it('getCountry should work for all country codes', function(){
		var india = {"countryName":"India","iso2":"IN","iso3":"IND","phoneCode":"91"};
		assert.deepEqual(CountryCodes.getCountry('India'),india);
		assert.deepEqual(CountryCodes.getCountry('india'),india);
		assert.deepEqual(CountryCodes.getCountry('inDia'),india);
		
		assert.deepEqual(CountryCodes.getCountry('IN'),india);
		assert.deepEqual(CountryCodes.getCountry('in'),india);
		assert.deepEqual(CountryCodes.getCountry('iN'),india);
		
		assert.deepEqual(CountryCodes.getCountry('IND'),india);
		assert.deepEqual(CountryCodes.getCountry('ind'),india);
		assert.deepEqual(CountryCodes.getCountry('iNd'),india);
		
		assert.deepEqual(CountryCodes.getCountry('91'),india);
	});
	
	it('should return iso 2 letter country code', function(){
		assert.equal(CountryCodes.getISO2('India'), 'IN');
		assert.equal(CountryCodes.getISO2('InDia'), 'IN');
		
		assert.equal(CountryCodes.getISO2('IND'), 'IN');
		assert.equal(CountryCodes.getISO2('InD'), 'IN');
		
		assert.equal(CountryCodes.getISO2('91'), 'IN');
	});
	
	it('should return iso 3 letter country code', function(){
		assert.equal(CountryCodes.getISO3('India'), 'IND');
		assert.equal(CountryCodes.getISO3('InDia'), 'IND');
		
		assert.equal(CountryCodes.getISO3('IN'), 'IND');
		assert.equal(CountryCodes.getISO3('In'), 'IND');
		
		assert.equal(CountryCodes.getISO3('91'), 'IND');
	});
	
	it('should return phone code', function(){
		assert.equal(CountryCodes.getPhoneCode('India'), '91');
		assert.equal(CountryCodes.getPhoneCode('InDia'), '91');
		
		assert.equal(CountryCodes.getPhoneCode('IN'), '91');
		assert.equal(CountryCodes.getPhoneCode('In'), '91');
		
		assert.equal(CountryCodes.getPhoneCode('IND'), '91');
		assert.equal(CountryCodes.getPhoneCode('InD'), '91');
	});
	
	it('should withstand erroneous inputs', function(){
		//exceptional case
		assert.equal(CountryCodes.getPhoneCode('IO'), '');
		
		assert.equal(CountryCodes.getCountry(null), undefined);
		assert.equal(CountryCodes.getCountry(''), undefined);
		assert.equal(CountryCodes.getCountry(undefined), undefined);
		assert.equal(CountryCodes.getCountry('XYZ'), undefined);
		
		assert.equal(CountryCodes.getISO2(null), undefined);
		assert.equal(CountryCodes.getISO2(''), undefined);
		assert.equal(CountryCodes.getISO2(undefined), undefined);
		assert.equal(CountryCodes.getISO2('XYZ'), undefined);
		
		assert.equal(CountryCodes.getISO3(null), undefined);
		assert.equal(CountryCodes.getISO3(''), undefined);
		assert.equal(CountryCodes.getISO3(undefined), undefined);
		assert.equal(CountryCodes.getISO3('XYZ'), undefined);
		
		
		assert.equal(CountryCodes.getPhoneCode(null), undefined);
		assert.equal(CountryCodes.getPhoneCode(''), undefined);
		assert.equal(CountryCodes.getPhoneCode(undefined), undefined);
		assert.equal(CountryCodes.getPhoneCode('XYZ'), undefined);
		
	});
});

