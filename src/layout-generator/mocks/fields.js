const fields = [
    {
        "id": "firstName",
        "name": "firstName",
        "accessPath": "firstName",
        "ui": {
            "label": "First Name",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "First Name"
            }
        },
        "validation": {
            "required": true,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "middleName",
        "name": "middleName",
        "accessPath": "middleName",
        "ui": {
            "label": "Middle Name",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Middle Name"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text",
        "disabled": false
    },
    {
        "id": "lastName",
        "name": "lastName",
        "accessPath": "lastName",
        "ui": {
            "label": "Last Name",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Last Name"
            }
        },
        "validation": {
            "required": true,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "fullName",
        "name": "fullName",
        "accessPath": "fullName",
        "ui": {
            "label": "Full Name",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Full Name"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "prefixName",
        "name": "prefixName",
        "accessPath": "prefixName",
        "ui": {
            "label": "Prefix Name",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Prefix Name"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "suffixName",
        "name": "suffixName",
        "accessPath": "suffixName",
        "ui": {
            "label": "Suffix Name",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Suffix Name"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "designation",
        "name": "designation",
        "accessPath": "designation",
        "ui": {
            "label": "Designation",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Designation"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "birthPlace",
        "name": "birthPlace",
        "accessPath": "birthPlace",
        "ui": {
            "label": "Birthplace",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Birthplace"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "birthDate",
        "name": "birthDate",
        "accessPath": "birthDate",
        "ui": {
            "label": "Birth Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Birth Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Date"
    },
    {
        "id": "gender",
        "name": "gender",
        "accessPath": "gender",
        "ui": {
            "label": "Gender",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Gender"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "imageUrl",
        "name": "imageUrl",
        "accessPath": "imageUrl",
        "ui": {
            "label": "Image",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Image"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "maritalStatus",
        "name": "maritalStatus",
        "accessPath": "maritalStatus",
        "ui": {
            "label": "Marital Status",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Marital Status"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "PostalAddress",
        "name": "PostalAddress",
        "accessPath": "PostalAddress",
        "ui": {
            "label": "Address",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Address"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "smartFieldTemplate": "smartFieldTemplate_PostalAddress",
        "disabled": false,
        "description": "Defines all the fields in a standardized, global address. When you want to support more than one address in a record, select the Allow many option.",
        "fields": [
            {
                "id": "defaultIndicator",
                "name": "defaultIndicator",
                "accessPath": "PostalAddress.defaultIndicator",
                "ui": {
                    "label": "Default Indicator",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Default Indicator"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Boolean"
            },
            {
                "id": "addressType",
                "name": "addressType",
                "accessPath": "PostalAddress.addressType",
                "ui": {
                    "label": "Address Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Address Type"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "usageType",
                "name": "usageType",
                "accessPath": "PostalAddress.usageType",
                "ui": {
                    "label": "Usage Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Usage Type"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "addressStatus",
                "name": "addressStatus",
                "accessPath": "PostalAddress.addressStatus",
                "ui": {
                    "label": "Address Status",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Address Status"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "addressLine1",
                "name": "addressLine1",
                "accessPath": "PostalAddress.addressLine1",
                "ui": {
                    "label": "Address Line 1",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Address Line 1"
                    }
                },
                "validation": {
                    "required": true,
                    "max": 200
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "addressLine2",
                "name": "addressLine2",
                "accessPath": "PostalAddress.addressLine2",
                "ui": {
                    "label": "Address Line 2",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Address Line 2"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 200
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "addressLine3",
                "name": "addressLine3",
                "accessPath": "PostalAddress.addressLine3",
                "ui": {
                    "label": "Address Line 3",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Address Line 3"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 200
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "country",
                "name": "country",
                "accessPath": "PostalAddress.country",
                "ui": {
                    "label": "Country",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Country"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                },
                "description": "Country"
            },
            {
                "id": "state",
                "name": "state",
                "accessPath": "PostalAddress.state",
                "ui": {
                    "label": "State",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "State"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [
                        "PostalAddress.country"
                    ],
                    "codeField": "Code",
                    "valueField": "Name"
                },
                "description": "State"
            },
            {
                "id": "city",
                "name": "city",
                "accessPath": "PostalAddress.city",
                "ui": {
                    "label": "City",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "City"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 50
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text",
                "description": "City"
            },
            {
                "id": "county",
                "name": "county",
                "accessPath": "PostalAddress.county",
                "ui": {
                    "label": "County",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "County"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 50
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text",
                "description": "County"
            },
            {
                "id": "postalCode",
                "name": "postalCode",
                "accessPath": "PostalAddress.postalCode",
                "ui": {
                    "label": "Postal Code",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Postal Code"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 10
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text",
                "description": "Postal Code"
            },
            {
                "id": "postalCodeExtension",
                "name": "postalCodeExtension",
                "accessPath": "PostalAddress.postalCodeExtension",
                "ui": {
                    "label": "Postal Code Extension",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Postal Code Extension"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 10
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text",
                "description": "Postal Code Extension"
            },
            {
                "id": "coordinateSystem",
                "name": "coordinateSystem",
                "accessPath": "PostalAddress.coordinateSystem",
                "ui": {
                    "label": "Coordinate System",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Coordinate System"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 100
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text",
                "description": "Coordinate System"
            },
            {
                "id": "locationCoordinateDesc",
                "name": "locationCoordinateDesc",
                "accessPath": "PostalAddress.locationCoordinateDesc",
                "ui": {
                    "label": "Location Coordinate Desc",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Location Coordinate Desc"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 50
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text",
                "description": "Location Coordinate Desc"
            },
            {
                "id": "effectiveStartDate",
                "name": "effectiveStartDate",
                "accessPath": "PostalAddress.effectiveStartDate",
                "ui": {
                    "label": "Start Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Start Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            },
            {
                "id": "effectiveEndDate",
                "name": "effectiveEndDate",
                "accessPath": "PostalAddress.effectiveEndDate",
                "ui": {
                    "label": "End Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "End Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            },
            {
                "id": "latitude",
                "name": "latitude",
                "accessPath": "PostalAddress.latitude",
                "ui": {
                    "label": "Latitude",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Latitude"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 20
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text",
                "description": "Latitude"
            },
            {
                "id": "longitude",
                "name": "longitude",
                "accessPath": "PostalAddress.longitude",
                "ui": {
                    "label": "Longitude",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Longitude"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 20
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text",
                "description": "Longitude"
            }
        ]
    },
    {
        "id": "defaultIndicator",
        "name": "defaultIndicator",
        "accessPath": "PostalAddress.defaultIndicator",
        "ui": {
            "label": "Default Indicator",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Default Indicator"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Boolean"
    },
    {
        "id": "addressType",
        "name": "addressType",
        "accessPath": "PostalAddress.addressType",
        "ui": {
            "label": "Address Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Address Type"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "usageType",
        "name": "usageType",
        "accessPath": "PostalAddress.usageType",
        "ui": {
            "label": "Usage Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Usage Type"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "addressStatus",
        "name": "addressStatus",
        "accessPath": "PostalAddress.addressStatus",
        "ui": {
            "label": "Address Status",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Address Status"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "addressLine1",
        "name": "addressLine1",
        "accessPath": "PostalAddress.addressLine1",
        "ui": {
            "label": "Address Line 1",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Address Line 1"
            }
        },
        "validation": {
            "required": true,
            "max": 200
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "addressLine2",
        "name": "addressLine2",
        "accessPath": "PostalAddress.addressLine2",
        "ui": {
            "label": "Address Line 2",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Address Line 2"
            }
        },
        "validation": {
            "required": false,
            "max": 200
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "addressLine3",
        "name": "addressLine3",
        "accessPath": "PostalAddress.addressLine3",
        "ui": {
            "label": "Address Line 3",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Address Line 3"
            }
        },
        "validation": {
            "required": false,
            "max": 200
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "country",
        "name": "country",
        "accessPath": "PostalAddress.country",
        "ui": {
            "label": "Country",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Country"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        },
        "description": "Country"
    },
    {
        "id": "state",
        "name": "state",
        "accessPath": "PostalAddress.state",
        "ui": {
            "label": "State",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "State"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [
                "PostalAddress.country"
            ],
            "codeField": "Code",
            "valueField": "Name"
        },
        "description": "State"
    },
    {
        "id": "city",
        "name": "city",
        "accessPath": "PostalAddress.city",
        "ui": {
            "label": "City",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "City"
            }
        },
        "validation": {
            "required": false,
            "max": 50
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text",
        "description": "City"
    },
    {
        "id": "county",
        "name": "county",
        "accessPath": "PostalAddress.county",
        "ui": {
            "label": "County",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "County"
            }
        },
        "validation": {
            "required": false,
            "max": 50
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text",
        "description": "County"
    },
    {
        "id": "postalCode",
        "name": "postalCode",
        "accessPath": "PostalAddress.postalCode",
        "ui": {
            "label": "Postal Code",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Postal Code"
            }
        },
        "validation": {
            "required": false,
            "max": 10
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text",
        "description": "Postal Code"
    },
    {
        "id": "postalCodeExtension",
        "name": "postalCodeExtension",
        "accessPath": "PostalAddress.postalCodeExtension",
        "ui": {
            "label": "Postal Code Extension",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Postal Code Extension"
            }
        },
        "validation": {
            "required": false,
            "max": 10
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text",
        "description": "Postal Code Extension"
    },
    {
        "id": "coordinateSystem",
        "name": "coordinateSystem",
        "accessPath": "PostalAddress.coordinateSystem",
        "ui": {
            "label": "Coordinate System",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Coordinate System"
            }
        },
        "validation": {
            "required": false,
            "max": 100
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text",
        "description": "Coordinate System"
    },
    {
        "id": "locationCoordinateDesc",
        "name": "locationCoordinateDesc",
        "accessPath": "PostalAddress.locationCoordinateDesc",
        "ui": {
            "label": "Location Coordinate Desc",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Location Coordinate Desc"
            }
        },
        "validation": {
            "required": false,
            "max": 50
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text",
        "description": "Location Coordinate Desc"
    },
    {
        "id": "effectiveStartDate",
        "name": "effectiveStartDate",
        "accessPath": "PostalAddress.effectiveStartDate",
        "ui": {
            "label": "Start Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Start Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "effectiveEndDate",
        "name": "effectiveEndDate",
        "accessPath": "PostalAddress.effectiveEndDate",
        "ui": {
            "label": "End Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "End Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "latitude",
        "name": "latitude",
        "accessPath": "PostalAddress.latitude",
        "ui": {
            "label": "Latitude",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Latitude"
            }
        },
        "validation": {
            "required": false,
            "max": 20
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text",
        "description": "Latitude"
    },
    {
        "id": "longitude",
        "name": "longitude",
        "accessPath": "PostalAddress.longitude",
        "ui": {
            "label": "Longitude",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Longitude"
            }
        },
        "validation": {
            "required": false,
            "max": 20
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text",
        "description": "Longitude"
    },
    {
        "id": "Phone",
        "name": "Phone",
        "accessPath": "Phone",
        "ui": {
            "label": "Phone",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Phone"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "smartFieldTemplate": "smartFieldTemplate_Phone",
        "description": "Defines fields for a telephone number and its purpose, such as home or work. When you want to support more than one phone number in a record, select the Allow many option.",
        "fields": [
            {
                "id": "defaultIndicator",
                "name": "defaultIndicator",
                "accessPath": "Phone.defaultIndicator",
                "ui": {
                    "label": "Default Indicator",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Default Indicator"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Boolean"
            },
            {
                "id": "doNotCallIndicator",
                "name": "doNotCallIndicator",
                "accessPath": "Phone.doNotCallIndicator",
                "ui": {
                    "label": "Do Not Call Indicator",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Do Not Call Indicator"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Boolean"
            },
            {
                "id": "phoneUsageType",
                "name": "phoneUsageType",
                "accessPath": "Phone.phoneUsageType",
                "ui": {
                    "label": "Phone Usage Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Phone Usage Type"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "phoneType",
                "name": "phoneType",
                "accessPath": "Phone.phoneType",
                "ui": {
                    "label": "Phone Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Phone Type"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "phoneNumber",
                "name": "phoneNumber",
                "accessPath": "Phone.phoneNumber",
                "ui": {
                    "label": "Phone Number",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Phone Number"
                    }
                },
                "validation": {
                    "required": true,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "phoneNumberExtension",
                "name": "phoneNumberExtension",
                "accessPath": "Phone.phoneNumberExtension",
                "ui": {
                    "label": "Phone Number Extension",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Phone Number Extension"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "prefixNumber",
                "name": "prefixNumber",
                "accessPath": "Phone.prefixNumber",
                "ui": {
                    "label": "Prefix Number",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Prefix Number"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "internationalPrefix",
                "name": "internationalPrefix",
                "accessPath": "Phone.internationalPrefix",
                "ui": {
                    "label": "International Prefix",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "International Prefix"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "nationalPrefix",
                "name": "nationalPrefix",
                "accessPath": "Phone.nationalPrefix",
                "ui": {
                    "label": "National Prefix",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "National Prefix"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "cellPrefix",
                "name": "cellPrefix",
                "accessPath": "Phone.cellPrefix",
                "ui": {
                    "label": "Cell Prefix",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Cell Prefix"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "effectiveStartDate",
                "name": "effectiveStartDate",
                "accessPath": "Phone.effectiveStartDate",
                "ui": {
                    "label": "Effective Start Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective Start Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            },
            {
                "id": "effectiveEndDate",
                "name": "effectiveEndDate",
                "accessPath": "Phone.effectiveEndDate",
                "ui": {
                    "label": "Effective End Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective End Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            },
            {
                "id": "nationalDestinationCode",
                "name": "nationalDestinationCode",
                "accessPath": "Phone.nationalDestinationCode",
                "ui": {
                    "label": "National Destination Code",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "National Destination Code"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "nationalDestinationCodeIndicator",
                "name": "nationalDestinationCodeIndicator",
                "accessPath": "Phone.nationalDestinationCodeIndicator",
                "ui": {
                    "label": "National Destination Code Indicator",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "National Destination Code Indicator"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Boolean"
            },
            {
                "id": "nationalFormat",
                "name": "nationalFormat",
                "accessPath": "Phone.nationalFormat",
                "ui": {
                    "label": "National Format",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "National Format"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 50
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "internationalFormat",
                "name": "internationalFormat",
                "accessPath": "Phone.internationalFormat",
                "ui": {
                    "label": "International Format",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "International Format"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 50
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "iso",
                "name": "iso",
                "accessPath": "Phone.iso",
                "ui": {
                    "label": "ISO",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "ISO"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 2
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "validationStatusCode",
                "name": "validationStatusCode",
                "accessPath": "Phone.validationStatusCode",
                "ui": {
                    "label": "Validation Status",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Validation Status"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "enrichedIndicator",
                "name": "enrichedIndicator",
                "accessPath": "Phone.enrichedIndicator",
                "ui": {
                    "label": "Enriched Indicator",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Enriched Indicator"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Boolean"
            },
            {
                "id": "validationMessage",
                "name": "validationMessage",
                "accessPath": "Phone.validationMessage",
                "ui": {
                    "label": "Validation Message",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Validation Message"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "status",
                "name": "status",
                "accessPath": "Phone.status",
                "ui": {
                    "label": "Status",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Status"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            }
        ]
    },
    {
        "id": "defaultIndicator",
        "name": "defaultIndicator",
        "accessPath": "Phone.defaultIndicator",
        "ui": {
            "label": "Default Indicator",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Default Indicator"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Boolean"
    },
    {
        "id": "doNotCallIndicator",
        "name": "doNotCallIndicator",
        "accessPath": "Phone.doNotCallIndicator",
        "ui": {
            "label": "Do Not Call Indicator",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Do Not Call Indicator"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Boolean"
    },
    {
        "id": "phoneUsageType",
        "name": "phoneUsageType",
        "accessPath": "Phone.phoneUsageType",
        "ui": {
            "label": "Phone Usage Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Phone Usage Type"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "phoneType",
        "name": "phoneType",
        "accessPath": "Phone.phoneType",
        "ui": {
            "label": "Phone Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Phone Type"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "phoneNumber",
        "name": "phoneNumber",
        "accessPath": "Phone.phoneNumber",
        "ui": {
            "label": "Phone Number",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Phone Number"
            }
        },
        "validation": {
            "required": true,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "phoneNumberExtension",
        "name": "phoneNumberExtension",
        "accessPath": "Phone.phoneNumberExtension",
        "ui": {
            "label": "Phone Number Extension",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Phone Number Extension"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "prefixNumber",
        "name": "prefixNumber",
        "accessPath": "Phone.prefixNumber",
        "ui": {
            "label": "Prefix Number",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Prefix Number"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "internationalPrefix",
        "name": "internationalPrefix",
        "accessPath": "Phone.internationalPrefix",
        "ui": {
            "label": "International Prefix",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "International Prefix"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "nationalPrefix",
        "name": "nationalPrefix",
        "accessPath": "Phone.nationalPrefix",
        "ui": {
            "label": "National Prefix",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "National Prefix"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "cellPrefix",
        "name": "cellPrefix",
        "accessPath": "Phone.cellPrefix",
        "ui": {
            "label": "Cell Prefix",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Cell Prefix"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "effectiveStartDate",
        "name": "effectiveStartDate",
        "accessPath": "Phone.effectiveStartDate",
        "ui": {
            "label": "Effective Start Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective Start Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "effectiveEndDate",
        "name": "effectiveEndDate",
        "accessPath": "Phone.effectiveEndDate",
        "ui": {
            "label": "Effective End Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective End Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "nationalDestinationCode",
        "name": "nationalDestinationCode",
        "accessPath": "Phone.nationalDestinationCode",
        "ui": {
            "label": "National Destination Code",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "National Destination Code"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "nationalDestinationCodeIndicator",
        "name": "nationalDestinationCodeIndicator",
        "accessPath": "Phone.nationalDestinationCodeIndicator",
        "ui": {
            "label": "National Destination Code Indicator",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "National Destination Code Indicator"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Boolean"
    },
    {
        "id": "nationalFormat",
        "name": "nationalFormat",
        "accessPath": "Phone.nationalFormat",
        "ui": {
            "label": "National Format",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "National Format"
            }
        },
        "validation": {
            "required": false,
            "max": 50
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "internationalFormat",
        "name": "internationalFormat",
        "accessPath": "Phone.internationalFormat",
        "ui": {
            "label": "International Format",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "International Format"
            }
        },
        "validation": {
            "required": false,
            "max": 50
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "iso",
        "name": "iso",
        "accessPath": "Phone.iso",
        "ui": {
            "label": "ISO",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "ISO"
            }
        },
        "validation": {
            "required": false,
            "max": 2
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "validationStatusCode",
        "name": "validationStatusCode",
        "accessPath": "Phone.validationStatusCode",
        "ui": {
            "label": "Validation Status",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Validation Status"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "enrichedIndicator",
        "name": "enrichedIndicator",
        "accessPath": "Phone.enrichedIndicator",
        "ui": {
            "label": "Enriched Indicator",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Enriched Indicator"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Boolean"
    },
    {
        "id": "validationMessage",
        "name": "validationMessage",
        "accessPath": "Phone.validationMessage",
        "ui": {
            "label": "Validation Message",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Validation Message"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "status",
        "name": "status",
        "accessPath": "Phone.status",
        "ui": {
            "label": "Status",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Status"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "ElectronicAddress",
        "name": "ElectronicAddress",
        "accessPath": "ElectronicAddress",
        "ui": {
            "label": "Email",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Email"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "smartFieldTemplate": "smartFieldTemplate_Email",
        "description": "Defines fields for an email address and its purpose, such as work or home. When you want to support more than one email address in a record, select the Allow many option.",
        "fields": [
            {
                "id": "usageType",
                "name": "usageType",
                "accessPath": "ElectronicAddress.usageType",
                "ui": {
                    "label": "Usage Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Usage Type"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "defaultIndicator",
                "name": "defaultIndicator",
                "accessPath": "ElectronicAddress.defaultIndicator",
                "ui": {
                    "label": "Default Indicator",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Default Indicator"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Boolean"
            },
            {
                "id": "electronicAddress",
                "name": "electronicAddress",
                "accessPath": "ElectronicAddress.electronicAddress",
                "ui": {
                    "label": "Electronic Address",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Electronic Address"
                    }
                },
                "validation": {
                    "required": true,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "electronicAddressStatus",
                "name": "electronicAddressStatus",
                "accessPath": "ElectronicAddress.electronicAddressStatus",
                "ui": {
                    "label": "Electronic Address Status",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Electronic Address Status"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "effectiveStartDate",
                "name": "effectiveStartDate",
                "accessPath": "ElectronicAddress.effectiveStartDate",
                "ui": {
                    "label": "Effective Start Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective Start Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            },
            {
                "id": "effectiveEndDate",
                "name": "effectiveEndDate",
                "accessPath": "ElectronicAddress.effectiveEndDate",
                "ui": {
                    "label": "Effective End Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective End Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            },
            {
                "id": "netProtectCode",
                "name": "netProtectCode",
                "accessPath": "ElectronicAddress.netProtectCode",
                "ui": {
                    "label": "Net Protect Code",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Net Protect Code"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "validationStatusCode",
                "name": "validationStatusCode",
                "accessPath": "ElectronicAddress.validationStatusCode",
                "ui": {
                    "label": "Validation Status",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Validation Status"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "validationMessage",
                "name": "validationMessage",
                "accessPath": "ElectronicAddress.validationMessage",
                "ui": {
                    "label": "Validation Message",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Validation Message"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "hygieneStatus",
                "name": "hygieneStatus",
                "accessPath": "ElectronicAddress.hygieneStatus",
                "ui": {
                    "label": "Hygiene Status",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Hygiene Status"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "enrichedIndicator",
                "name": "enrichedIndicator",
                "accessPath": "ElectronicAddress.enrichedIndicator",
                "ui": {
                    "label": "Enriched Indicator",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Enriched Indicator"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Boolean"
            }
        ]
    },
    {
        "id": "usageType",
        "name": "usageType",
        "accessPath": "ElectronicAddress.usageType",
        "ui": {
            "label": "Usage Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Usage Type"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "defaultIndicator",
        "name": "defaultIndicator",
        "accessPath": "ElectronicAddress.defaultIndicator",
        "ui": {
            "label": "Default Indicator",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Default Indicator"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Boolean"
    },
    {
        "id": "electronicAddress",
        "name": "electronicAddress",
        "accessPath": "ElectronicAddress.electronicAddress",
        "ui": {
            "label": "Electronic Address",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Electronic Address"
            }
        },
        "validation": {
            "required": true,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "electronicAddressStatus",
        "name": "electronicAddressStatus",
        "accessPath": "ElectronicAddress.electronicAddressStatus",
        "ui": {
            "label": "Electronic Address Status",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Electronic Address Status"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "effectiveStartDate",
        "name": "effectiveStartDate",
        "accessPath": "ElectronicAddress.effectiveStartDate",
        "ui": {
            "label": "Effective Start Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective Start Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "effectiveEndDate",
        "name": "effectiveEndDate",
        "accessPath": "ElectronicAddress.effectiveEndDate",
        "ui": {
            "label": "Effective End Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective End Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "netProtectCode",
        "name": "netProtectCode",
        "accessPath": "ElectronicAddress.netProtectCode",
        "ui": {
            "label": "Net Protect Code",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Net Protect Code"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "validationStatusCode",
        "name": "validationStatusCode",
        "accessPath": "ElectronicAddress.validationStatusCode",
        "ui": {
            "label": "Validation Status",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Validation Status"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "validationMessage",
        "name": "validationMessage",
        "accessPath": "ElectronicAddress.validationMessage",
        "ui": {
            "label": "Validation Message",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Validation Message"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "hygieneStatus",
        "name": "hygieneStatus",
        "accessPath": "ElectronicAddress.hygieneStatus",
        "ui": {
            "label": "Hygiene Status",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Hygiene Status"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "enrichedIndicator",
        "name": "enrichedIndicator",
        "accessPath": "ElectronicAddress.enrichedIndicator",
        "ui": {
            "label": "Enriched Indicator",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Enriched Indicator"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Boolean"
    },
    {
        "id": "SocialHandle",
        "name": "SocialHandle",
        "accessPath": "SocialHandle",
        "ui": {
            "label": "Social Media",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Social Media"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "fields": [
            {
                "id": "socialHandleType",
                "name": "socialHandleType",
                "accessPath": "SocialHandle.socialHandleType",
                "ui": {
                    "label": "Social Media Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Social Media Type"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "socialMediaValue",
                "name": "socialMediaValue",
                "accessPath": "SocialHandle.socialMediaValue",
                "ui": {
                    "label": "Social Media Value",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Social Media Value"
                    }
                },
                "validation": {
                    "required": true,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            }
        ]
    },
    {
        "id": "socialHandleType",
        "name": "socialHandleType",
        "accessPath": "SocialHandle.socialHandleType",
        "ui": {
            "label": "Social Media Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Social Media Type"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "socialMediaValue",
        "name": "socialMediaValue",
        "accessPath": "SocialHandle.socialMediaValue",
        "ui": {
            "label": "Social Media Value",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Social Media Value"
            }
        },
        "validation": {
            "required": true,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "ProfessionalDetail",
        "name": "ProfessionalDetail",
        "accessPath": "ProfessionalDetail",
        "ui": {
            "label": "Employment",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Employment"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "fields": [
            {
                "id": "designation",
                "name": "designation",
                "accessPath": "ProfessionalDetail.designation",
                "ui": {
                    "label": "Designation",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Designation"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "employerName",
                "name": "employerName",
                "accessPath": "ProfessionalDetail.employerName",
                "ui": {
                    "label": "Employer Name",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Employer Name"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "location",
                "name": "location",
                "accessPath": "ProfessionalDetail.location",
                "ui": {
                    "label": "Location",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Location"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "employmentType",
                "name": "employmentType",
                "accessPath": "ProfessionalDetail.employmentType",
                "ui": {
                    "label": "Employment Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Employment Type"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "employmentStatus",
                "name": "employmentStatus",
                "accessPath": "ProfessionalDetail.employmentStatus",
                "ui": {
                    "label": "Employment Status",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Employment Status"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "lineOfBusiness",
                "name": "lineOfBusiness",
                "accessPath": "ProfessionalDetail.lineOfBusiness",
                "ui": {
                    "label": "Line of Business",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Line of Business"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "effectiveStartDate",
                "name": "effectiveStartDate",
                "accessPath": "ProfessionalDetail.effectiveStartDate",
                "ui": {
                    "label": "Effective Start Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective Start Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            },
            {
                "id": "effectiveEndDate",
                "name": "effectiveEndDate",
                "accessPath": "ProfessionalDetail.effectiveEndDate",
                "ui": {
                    "label": "Effective End Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective End Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            }
        ]
    },
    {
        "id": "designation",
        "name": "designation",
        "accessPath": "ProfessionalDetail.designation",
        "ui": {
            "label": "Designation",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Designation"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "employerName",
        "name": "employerName",
        "accessPath": "ProfessionalDetail.employerName",
        "ui": {
            "label": "Employer Name",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Employer Name"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "location",
        "name": "location",
        "accessPath": "ProfessionalDetail.location",
        "ui": {
            "label": "Location",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Location"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "employmentType",
        "name": "employmentType",
        "accessPath": "ProfessionalDetail.employmentType",
        "ui": {
            "label": "Employment Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Employment Type"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "employmentStatus",
        "name": "employmentStatus",
        "accessPath": "ProfessionalDetail.employmentStatus",
        "ui": {
            "label": "Employment Status",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Employment Status"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "lineOfBusiness",
        "name": "lineOfBusiness",
        "accessPath": "ProfessionalDetail.lineOfBusiness",
        "ui": {
            "label": "Line of Business",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Line of Business"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "effectiveStartDate",
        "name": "effectiveStartDate",
        "accessPath": "ProfessionalDetail.effectiveStartDate",
        "ui": {
            "label": "Effective Start Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective Start Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "effectiveEndDate",
        "name": "effectiveEndDate",
        "accessPath": "ProfessionalDetail.effectiveEndDate",
        "ui": {
            "label": "Effective End Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective End Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "Qualification",
        "name": "Qualification",
        "accessPath": "Qualification",
        "ui": {
            "label": "Education",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Education"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "fields": [
            {
                "id": "qualificationType",
                "name": "qualificationType",
                "accessPath": "Qualification.qualificationType",
                "ui": {
                    "label": "Qualification Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Qualification Type"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "qualificationName",
                "name": "qualificationName",
                "accessPath": "Qualification.qualificationName",
                "ui": {
                    "label": "Qualification Name",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Qualification Name"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "qualificationStatus",
                "name": "qualificationStatus",
                "accessPath": "Qualification.qualificationStatus",
                "ui": {
                    "label": "Qualification Status",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Qualification Status"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "institutionName",
                "name": "institutionName",
                "accessPath": "Qualification.institutionName",
                "ui": {
                    "label": "Institution Name",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Institution Name"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "studentNumber",
                "name": "studentNumber",
                "accessPath": "Qualification.studentNumber",
                "ui": {
                    "label": "Student Number",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Student Number"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "effectiveStartDate",
                "name": "effectiveStartDate",
                "accessPath": "Qualification.effectiveStartDate",
                "ui": {
                    "label": "Effective Start Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective Start Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            },
            {
                "id": "effectiveEndDate",
                "name": "effectiveEndDate",
                "accessPath": "Qualification.effectiveEndDate",
                "ui": {
                    "label": "Effective End Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective End Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            },
            {
                "id": "addressLine1",
                "name": "addressLine1",
                "accessPath": "Qualification.addressLine1",
                "ui": {
                    "label": "Address Line 1",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Address Line 1"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "addressLine2",
                "name": "addressLine2",
                "accessPath": "Qualification.addressLine2",
                "ui": {
                    "label": "Address Line 2",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Address Line 2"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "country",
                "name": "country",
                "accessPath": "Qualification.country",
                "ui": {
                    "label": "Country",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Country"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "state",
                "name": "state",
                "accessPath": "Qualification.state",
                "ui": {
                    "label": "State",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "State"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [
                        "Qualification.country"
                    ],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "city",
                "name": "city",
                "accessPath": "Qualification.city",
                "ui": {
                    "label": "City",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "City"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "postalCode",
                "name": "postalCode",
                "accessPath": "Qualification.postalCode",
                "ui": {
                    "label": "Postal Code",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Postal Code"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "postalCodeExtension",
                "name": "postalCodeExtension",
                "accessPath": "Qualification.postalCodeExtension",
                "ui": {
                    "label": "Postal Code Extension",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Postal Code Extension"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            }
        ]
    },
    {
        "id": "qualificationType",
        "name": "qualificationType",
        "accessPath": "Qualification.qualificationType",
        "ui": {
            "label": "Qualification Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Qualification Type"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "qualificationName",
        "name": "qualificationName",
        "accessPath": "Qualification.qualificationName",
        "ui": {
            "label": "Qualification Name",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Qualification Name"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "qualificationStatus",
        "name": "qualificationStatus",
        "accessPath": "Qualification.qualificationStatus",
        "ui": {
            "label": "Qualification Status",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Qualification Status"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "institutionName",
        "name": "institutionName",
        "accessPath": "Qualification.institutionName",
        "ui": {
            "label": "Institution Name",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Institution Name"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "studentNumber",
        "name": "studentNumber",
        "accessPath": "Qualification.studentNumber",
        "ui": {
            "label": "Student Number",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Student Number"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "effectiveStartDate",
        "name": "effectiveStartDate",
        "accessPath": "Qualification.effectiveStartDate",
        "ui": {
            "label": "Effective Start Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective Start Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "effectiveEndDate",
        "name": "effectiveEndDate",
        "accessPath": "Qualification.effectiveEndDate",
        "ui": {
            "label": "Effective End Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective End Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "addressLine1",
        "name": "addressLine1",
        "accessPath": "Qualification.addressLine1",
        "ui": {
            "label": "Address Line 1",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Address Line 1"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "addressLine2",
        "name": "addressLine2",
        "accessPath": "Qualification.addressLine2",
        "ui": {
            "label": "Address Line 2",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Address Line 2"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "country",
        "name": "country",
        "accessPath": "Qualification.country",
        "ui": {
            "label": "Country",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Country"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "state",
        "name": "state",
        "accessPath": "Qualification.state",
        "ui": {
            "label": "State",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "State"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [
                "Qualification.country"
            ],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "city",
        "name": "city",
        "accessPath": "Qualification.city",
        "ui": {
            "label": "City",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "City"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "postalCode",
        "name": "postalCode",
        "accessPath": "Qualification.postalCode",
        "ui": {
            "label": "Postal Code",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Postal Code"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "postalCodeExtension",
        "name": "postalCodeExtension",
        "accessPath": "Qualification.postalCodeExtension",
        "ui": {
            "label": "Postal Code Extension",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Postal Code Extension"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "Specialization",
        "name": "Specialization",
        "accessPath": "Specialization",
        "ui": {
            "label": "Specialization",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Specialization"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "fields": [
            {
                "id": "specialtyType",
                "name": "specialtyType",
                "accessPath": "Specialization.specialtyType",
                "ui": {
                    "label": "Specialty Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Specialty Type"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "speciality",
                "name": "speciality",
                "accessPath": "Specialization.speciality",
                "ui": {
                    "label": "Specialty",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Specialty"
                    }
                },
                "validation": {
                    "required": true,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "boardCertificationFlag",
                "name": "boardCertificationFlag",
                "accessPath": "Specialization.boardCertificationFlag",
                "ui": {
                    "label": "Board Certification Flag",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Board Certification Flag"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Boolean"
            }
        ]
    },
    {
        "id": "specialtyType",
        "name": "specialtyType",
        "accessPath": "Specialization.specialtyType",
        "ui": {
            "label": "Specialty Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Specialty Type"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "speciality",
        "name": "speciality",
        "accessPath": "Specialization.speciality",
        "ui": {
            "label": "Specialty",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Specialty"
            }
        },
        "validation": {
            "required": true,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "boardCertificationFlag",
        "name": "boardCertificationFlag",
        "accessPath": "Specialization.boardCertificationFlag",
        "ui": {
            "label": "Board Certification Flag",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Board Certification Flag"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Boolean"
    },
    {
        "id": "Financial",
        "name": "Financial",
        "accessPath": "Financial",
        "ui": {
            "label": "Financial",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Financial"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "fields": [
            {
                "id": "financeInfoType",
                "name": "financeInfoType",
                "accessPath": "Financial.financeInfoType",
                "ui": {
                    "label": "Finance Info Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Finance Info Type"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "amount",
                "name": "amount",
                "accessPath": "Financial.amount",
                "ui": {
                    "label": "Amount",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Amount"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Double"
            },
            {
                "id": "unit",
                "name": "unit",
                "accessPath": "Financial.unit",
                "ui": {
                    "label": "Unit",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Unit"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "currency",
                "name": "currency",
                "accessPath": "Financial.currency",
                "ui": {
                    "label": "Currency",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Currency"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "financeReliability",
                "name": "financeReliability",
                "accessPath": "Financial.financeReliability",
                "ui": {
                    "label": "Financial Reliability",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Financial Reliability"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "timePeriod",
                "name": "timePeriod",
                "accessPath": "Financial.timePeriod",
                "ui": {
                    "label": "Time Period",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Time Period"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "timePeriodType",
                "name": "timePeriodType",
                "accessPath": "Financial.timePeriodType",
                "ui": {
                    "label": "Time Period Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Time Period Type"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            }
        ]
    },
    {
        "id": "financeInfoType",
        "name": "financeInfoType",
        "accessPath": "Financial.financeInfoType",
        "ui": {
            "label": "Finance Info Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Finance Info Type"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "amount",
        "name": "amount",
        "accessPath": "Financial.amount",
        "ui": {
            "label": "Amount",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Amount"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Double"
    },
    {
        "id": "unit",
        "name": "unit",
        "accessPath": "Financial.unit",
        "ui": {
            "label": "Unit",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Unit"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "currency",
        "name": "currency",
        "accessPath": "Financial.currency",
        "ui": {
            "label": "Currency",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Currency"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "financeReliability",
        "name": "financeReliability",
        "accessPath": "Financial.financeReliability",
        "ui": {
            "label": "Financial Reliability",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Financial Reliability"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "timePeriod",
        "name": "timePeriod",
        "accessPath": "Financial.timePeriod",
        "ui": {
            "label": "Time Period",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Time Period"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "timePeriodType",
        "name": "timePeriodType",
        "accessPath": "Financial.timePeriodType",
        "ui": {
            "label": "Time Period Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Time Period Type"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "TaxDetail",
        "name": "TaxDetail",
        "accessPath": "TaxDetail",
        "ui": {
            "label": "Tax Details",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Tax Details"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "fields": [
            {
                "id": "taxNumberType",
                "name": "taxNumberType",
                "accessPath": "TaxDetail.taxNumberType",
                "ui": {
                    "label": "Tax Number Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Tax Number Type"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "taxNumber",
                "name": "taxNumber",
                "accessPath": "TaxDetail.taxNumber",
                "ui": {
                    "label": "Tax Number",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Tax Number"
                    }
                },
                "validation": {
                    "required": true,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "taxAuthority",
                "name": "taxAuthority",
                "accessPath": "TaxDetail.taxAuthority",
                "ui": {
                    "label": "Tax Authority",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Tax Authority"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "taxPaid",
                "name": "taxPaid",
                "accessPath": "TaxDetail.taxPaid",
                "ui": {
                    "label": "Tax Paid",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Tax Paid"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "taxPayerType",
                "name": "taxPayerType",
                "accessPath": "TaxDetail.taxPayerType",
                "ui": {
                    "label": "Taxpayer Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Taxpayer Type"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "currency",
                "name": "currency",
                "accessPath": "TaxDetail.currency",
                "ui": {
                    "label": "Currency",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Currency"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "country",
                "name": "country",
                "accessPath": "TaxDetail.country",
                "ui": {
                    "label": "Country",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Country"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "state",
                "name": "state",
                "accessPath": "TaxDetail.state",
                "ui": {
                    "label": "State",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "State"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [
                        "TaxDetail.country"
                    ],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "effectiveStartDate",
                "name": "effectiveStartDate",
                "accessPath": "TaxDetail.effectiveStartDate",
                "ui": {
                    "label": "Effective Start Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective Start Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            },
            {
                "id": "effectiveEndDate",
                "name": "effectiveEndDate",
                "accessPath": "TaxDetail.effectiveEndDate",
                "ui": {
                    "label": "Effective End Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective End Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            }
        ]
    },
    {
        "id": "taxNumberType",
        "name": "taxNumberType",
        "accessPath": "TaxDetail.taxNumberType",
        "ui": {
            "label": "Tax Number Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Tax Number Type"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "taxNumber",
        "name": "taxNumber",
        "accessPath": "TaxDetail.taxNumber",
        "ui": {
            "label": "Tax Number",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Tax Number"
            }
        },
        "validation": {
            "required": true,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "taxAuthority",
        "name": "taxAuthority",
        "accessPath": "TaxDetail.taxAuthority",
        "ui": {
            "label": "Tax Authority",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Tax Authority"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "taxPaid",
        "name": "taxPaid",
        "accessPath": "TaxDetail.taxPaid",
        "ui": {
            "label": "Tax Paid",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Tax Paid"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "taxPayerType",
        "name": "taxPayerType",
        "accessPath": "TaxDetail.taxPayerType",
        "ui": {
            "label": "Taxpayer Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Taxpayer Type"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "currency",
        "name": "currency",
        "accessPath": "TaxDetail.currency",
        "ui": {
            "label": "Currency",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Currency"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "country",
        "name": "country",
        "accessPath": "TaxDetail.country",
        "ui": {
            "label": "Country",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Country"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "state",
        "name": "state",
        "accessPath": "TaxDetail.state",
        "ui": {
            "label": "State",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "State"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [
                "TaxDetail.country"
            ],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "effectiveStartDate",
        "name": "effectiveStartDate",
        "accessPath": "TaxDetail.effectiveStartDate",
        "ui": {
            "label": "Effective Start Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective Start Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "effectiveEndDate",
        "name": "effectiveEndDate",
        "accessPath": "TaxDetail.effectiveEndDate",
        "ui": {
            "label": "Effective End Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective End Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "AlternateName",
        "name": "AlternateName",
        "accessPath": "AlternateName",
        "ui": {
            "label": "Alternate Names",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Alternate Names"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "fields": [
            {
                "id": "alternateNameType",
                "name": "alternateNameType",
                "accessPath": "AlternateName.alternateNameType",
                "ui": {
                    "label": "Alternate Name Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Alternate Name Type"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "AlternateName",
                "name": "AlternateName",
                "accessPath": "AlternateName.AlternateName",
                "ui": {
                    "label": "Alternate Name",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Alternate Name"
                    }
                },
                "validation": {
                    "required": true,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "effectiveStartDate",
                "name": "effectiveStartDate",
                "accessPath": "AlternateName.effectiveStartDate",
                "ui": {
                    "label": "Effective Start Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective Start Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            },
            {
                "id": "effectiveEndDate",
                "name": "effectiveEndDate",
                "accessPath": "AlternateName.effectiveEndDate",
                "ui": {
                    "label": "Effective End Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective End Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            }
        ]
    },
    {
        "id": "alternateNameType",
        "name": "alternateNameType",
        "accessPath": "AlternateName.alternateNameType",
        "ui": {
            "label": "Alternate Name Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Alternate Name Type"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "AlternateName",
        "name": "AlternateName",
        "accessPath": "AlternateName.AlternateName",
        "ui": {
            "label": "Alternate Name",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Alternate Name"
            }
        },
        "validation": {
            "required": true,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "effectiveStartDate",
        "name": "effectiveStartDate",
        "accessPath": "AlternateName.effectiveStartDate",
        "ui": {
            "label": "Effective Start Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective Start Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "effectiveEndDate",
        "name": "effectiveEndDate",
        "accessPath": "AlternateName.effectiveEndDate",
        "ui": {
            "label": "Effective End Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective End Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "LifeStyleDetail",
        "name": "LifeStyleDetail",
        "accessPath": "LifeStyleDetail",
        "ui": {
            "label": "Lifestyle",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Lifestyle"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "fields": [
            {
                "id": "lifestyleType",
                "name": "lifestyleType",
                "accessPath": "LifeStyleDetail.lifestyleType",
                "ui": {
                    "label": "Lifestyle Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Lifestyle Type"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "lifestyleValue",
                "name": "lifestyleValue",
                "accessPath": "LifeStyleDetail.lifestyleValue",
                "ui": {
                    "label": "Lifestyle Value",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Lifestyle Value"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            }
        ]
    },
    {
        "id": "lifestyleType",
        "name": "lifestyleType",
        "accessPath": "LifeStyleDetail.lifestyleType",
        "ui": {
            "label": "Lifestyle Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Lifestyle Type"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "lifestyleValue",
        "name": "lifestyleValue",
        "accessPath": "LifeStyleDetail.lifestyleValue",
        "ui": {
            "label": "Lifestyle Value",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Lifestyle Value"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "Demographic",
        "name": "Demographic",
        "accessPath": "Demographic",
        "ui": {
            "label": "Demographics",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Demographics"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "fields": [
            {
                "id": "demographicType",
                "name": "demographicType",
                "accessPath": "Demographic.demographicType",
                "ui": {
                    "label": "Demographic Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Demographic Type"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "demographicValue",
                "name": "demographicValue",
                "accessPath": "Demographic.demographicValue",
                "ui": {
                    "label": "Demographic Value",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Demographic Value"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [
                        "Demographic.demographicType"
                    ],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            }
        ]
    },
    {
        "id": "demographicType",
        "name": "demographicType",
        "accessPath": "Demographic.demographicType",
        "ui": {
            "label": "Demographic Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Demographic Type"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "demographicValue",
        "name": "demographicValue",
        "accessPath": "Demographic.demographicValue",
        "ui": {
            "label": "Demographic Value",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Demographic Value"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [
                "Demographic.demographicType"
            ],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "Status",
        "name": "Status",
        "accessPath": "Status",
        "ui": {
            "label": "Status",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Status"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "fields": [
            {
                "id": "statusType",
                "name": "statusType",
                "accessPath": "Status.statusType",
                "ui": {
                    "label": "Status Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Status Type"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "statusValue",
                "name": "statusValue",
                "accessPath": "Status.statusValue",
                "ui": {
                    "label": "Status Value",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Status Value"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            }
        ]
    },
    {
        "id": "statusType",
        "name": "statusType",
        "accessPath": "Status.statusType",
        "ui": {
            "label": "Status Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Status Type"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "statusValue",
        "name": "statusValue",
        "accessPath": "Status.statusValue",
        "ui": {
            "label": "Status Value",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Status Value"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "Segment",
        "name": "Segment",
        "accessPath": "Segment",
        "ui": {
            "label": "Segment",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Segment"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "fields": [
            {
                "id": "segmentType",
                "name": "segmentType",
                "accessPath": "Segment.segmentType",
                "ui": {
                    "label": "Segment Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Segment Type"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "segmentValue",
                "name": "segmentValue",
                "accessPath": "Segment.segmentValue",
                "ui": {
                    "label": "Segment Value",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Segment Value"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [
                        "Segment.segmentType"
                    ],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            }
        ]
    },
    {
        "id": "segmentType",
        "name": "segmentType",
        "accessPath": "Segment.segmentType",
        "ui": {
            "label": "Segment Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Segment Type"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "segmentValue",
        "name": "segmentValue",
        "accessPath": "Segment.segmentValue",
        "ui": {
            "label": "Segment Value",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Segment Value"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [
                "Segment.segmentType"
            ],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "Citizenship",
        "name": "Citizenship",
        "accessPath": "Citizenship",
        "ui": {
            "label": "Citizenship",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Citizenship"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "fields": [
            {
                "id": "citizenOfCountry",
                "name": "citizenOfCountry",
                "accessPath": "Citizenship.citizenOfCountry",
                "ui": {
                    "label": "Citizen of Country",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Citizen of Country"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "citizenshipStatus",
                "name": "citizenshipStatus",
                "accessPath": "Citizenship.citizenshipStatus",
                "ui": {
                    "label": "Citizenship Status",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Citizenship Status"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "supportingDocumentName",
                "name": "supportingDocumentName",
                "accessPath": "Citizenship.supportingDocumentName",
                "ui": {
                    "label": "Supporting Document Name",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Supporting Document Name"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "effectiveStartDate",
                "name": "effectiveStartDate",
                "accessPath": "Citizenship.effectiveStartDate",
                "ui": {
                    "label": "Effective Start Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective Start Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            },
            {
                "id": "effectiveEndDate",
                "name": "effectiveEndDate",
                "accessPath": "Citizenship.effectiveEndDate",
                "ui": {
                    "label": "Effective End Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective End Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            }
        ]
    },
    {
        "id": "citizenOfCountry",
        "name": "citizenOfCountry",
        "accessPath": "Citizenship.citizenOfCountry",
        "ui": {
            "label": "Citizen of Country",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Citizen of Country"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "citizenshipStatus",
        "name": "citizenshipStatus",
        "accessPath": "Citizenship.citizenshipStatus",
        "ui": {
            "label": "Citizenship Status",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Citizenship Status"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "supportingDocumentName",
        "name": "supportingDocumentName",
        "accessPath": "Citizenship.supportingDocumentName",
        "ui": {
            "label": "Supporting Document Name",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Supporting Document Name"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "effectiveStartDate",
        "name": "effectiveStartDate",
        "accessPath": "Citizenship.effectiveStartDate",
        "ui": {
            "label": "Effective Start Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective Start Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "effectiveEndDate",
        "name": "effectiveEndDate",
        "accessPath": "Citizenship.effectiveEndDate",
        "ui": {
            "label": "Effective End Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective End Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "LoyaltyAccount",
        "name": "LoyaltyAccount",
        "accessPath": "LoyaltyAccount",
        "ui": {
            "label": "Loyalty",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Loyalty"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "fields": [
            {
                "id": "accountType",
                "name": "accountType",
                "accessPath": "LoyaltyAccount.accountType",
                "ui": {
                    "label": "Account Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Account Type"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "accountStatus",
                "name": "accountStatus",
                "accessPath": "LoyaltyAccount.accountStatus",
                "ui": {
                    "label": "Account Status",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Account Status"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "AccountNumber",
                "name": "AccountNumber",
                "accessPath": "LoyaltyAccount.AccountNumber",
                "ui": {
                    "label": "Account Number",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Account Number"
                    }
                },
                "validation": {
                    "required": true,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "redemptionPreferences",
                "name": "redemptionPreferences",
                "accessPath": "LoyaltyAccount.redemptionPreferences",
                "ui": {
                    "label": "Redemption Preferences",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Redemption Preferences"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "effectiveStartDate",
                "name": "effectiveStartDate",
                "accessPath": "LoyaltyAccount.effectiveStartDate",
                "ui": {
                    "label": "Effective Start Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective Start Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            },
            {
                "id": "effectiveEndDate",
                "name": "effectiveEndDate",
                "accessPath": "LoyaltyAccount.effectiveEndDate",
                "ui": {
                    "label": "Effective End Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective End Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            }
        ]
    },
    {
        "id": "accountType",
        "name": "accountType",
        "accessPath": "LoyaltyAccount.accountType",
        "ui": {
            "label": "Account Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Account Type"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "accountStatus",
        "name": "accountStatus",
        "accessPath": "LoyaltyAccount.accountStatus",
        "ui": {
            "label": "Account Status",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Account Status"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "AccountNumber",
        "name": "AccountNumber",
        "accessPath": "LoyaltyAccount.AccountNumber",
        "ui": {
            "label": "Account Number",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Account Number"
            }
        },
        "validation": {
            "required": true,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "redemptionPreferences",
        "name": "redemptionPreferences",
        "accessPath": "LoyaltyAccount.redemptionPreferences",
        "ui": {
            "label": "Redemption Preferences",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Redemption Preferences"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "effectiveStartDate",
        "name": "effectiveStartDate",
        "accessPath": "LoyaltyAccount.effectiveStartDate",
        "ui": {
            "label": "Effective Start Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective Start Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "effectiveEndDate",
        "name": "effectiveEndDate",
        "accessPath": "LoyaltyAccount.effectiveEndDate",
        "ui": {
            "label": "Effective End Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective End Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "AlternateIdentifier",
        "name": "AlternateIdentifier",
        "accessPath": "AlternateIdentifier",
        "ui": {
            "label": "Identifier",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Identifier"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "fields": [
            {
                "id": "alternateIdentifierType",
                "name": "alternateIdentifierType",
                "accessPath": "AlternateIdentifier.alternateIdentifierType",
                "ui": {
                    "label": "Alternate Identifier Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Alternate Identifier Type"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "alternateIdentifierValue",
                "name": "alternateIdentifierValue",
                "accessPath": "AlternateIdentifier.alternateIdentifierValue",
                "ui": {
                    "label": "Alternate Identifier Value",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Alternate Identifier Value"
                    }
                },
                "validation": {
                    "required": true,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "issuingAuthority",
                "name": "issuingAuthority",
                "accessPath": "AlternateIdentifier.issuingAuthority",
                "ui": {
                    "label": "Issuing Authority",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Issuing Authority"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "identifierStatus",
                "name": "identifierStatus",
                "accessPath": "AlternateIdentifier.identifierStatus",
                "ui": {
                    "label": "Status",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Status"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "effectiveStartDate",
                "name": "effectiveStartDate",
                "accessPath": "AlternateIdentifier.effectiveStartDate",
                "ui": {
                    "label": "Effective Start Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective Start Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            },
            {
                "id": "effectiveEndDate",
                "name": "effectiveEndDate",
                "accessPath": "AlternateIdentifier.effectiveEndDate",
                "ui": {
                    "label": "Effective End Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective End Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            }
        ]
    },
    {
        "id": "alternateIdentifierType",
        "name": "alternateIdentifierType",
        "accessPath": "AlternateIdentifier.alternateIdentifierType",
        "ui": {
            "label": "Alternate Identifier Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Alternate Identifier Type"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "alternateIdentifierValue",
        "name": "alternateIdentifierValue",
        "accessPath": "AlternateIdentifier.alternateIdentifierValue",
        "ui": {
            "label": "Alternate Identifier Value",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Alternate Identifier Value"
            }
        },
        "validation": {
            "required": true,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "issuingAuthority",
        "name": "issuingAuthority",
        "accessPath": "AlternateIdentifier.issuingAuthority",
        "ui": {
            "label": "Issuing Authority",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Issuing Authority"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "identifierStatus",
        "name": "identifierStatus",
        "accessPath": "AlternateIdentifier.identifierStatus",
        "ui": {
            "label": "Status",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Status"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "effectiveStartDate",
        "name": "effectiveStartDate",
        "accessPath": "AlternateIdentifier.effectiveStartDate",
        "ui": {
            "label": "Effective Start Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective Start Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "effectiveEndDate",
        "name": "effectiveEndDate",
        "accessPath": "AlternateIdentifier.effectiveEndDate",
        "ui": {
            "label": "Effective End Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective End Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "Document",
        "name": "Document",
        "accessPath": "Document",
        "ui": {
            "label": "Documents",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Documents"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "fields": [
            {
                "id": "documentType",
                "name": "documentType",
                "accessPath": "Document.documentType",
                "ui": {
                    "label": "Document Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Document Type"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "documentName",
                "name": "documentName",
                "accessPath": "Document.documentName",
                "ui": {
                    "label": "Document Name",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Document Name"
                    }
                },
                "validation": {
                    "required": true,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "documentLink",
                "name": "documentLink",
                "accessPath": "Document.documentLink",
                "ui": {
                    "label": "Document Link",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Document Link"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "fileName",
                "name": "fileName",
                "accessPath": "Document.fileName",
                "ui": {
                    "label": "File Name",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "File Name"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "validFrom",
                "name": "validFrom",
                "accessPath": "Document.validFrom",
                "ui": {
                    "label": "Valid From",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Valid From"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Date"
            },
            {
                "id": "validTo",
                "name": "validTo",
                "accessPath": "Document.validTo",
                "ui": {
                    "label": "Valid To",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Valid To"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Date"
            }
        ]
    },
    {
        "id": "documentType",
        "name": "documentType",
        "accessPath": "Document.documentType",
        "ui": {
            "label": "Document Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Document Type"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "documentName",
        "name": "documentName",
        "accessPath": "Document.documentName",
        "ui": {
            "label": "Document Name",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Document Name"
            }
        },
        "validation": {
            "required": true,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "documentLink",
        "name": "documentLink",
        "accessPath": "Document.documentLink",
        "ui": {
            "label": "Document Link",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Document Link"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "fileName",
        "name": "fileName",
        "accessPath": "Document.fileName",
        "ui": {
            "label": "File Name",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "File Name"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "validFrom",
        "name": "validFrom",
        "accessPath": "Document.validFrom",
        "ui": {
            "label": "Valid From",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Valid From"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Date"
    },
    {
        "id": "validTo",
        "name": "validTo",
        "accessPath": "Document.validTo",
        "ui": {
            "label": "Valid To",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Valid To"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Date"
    },
    {
        "id": "Insurance",
        "name": "Insurance",
        "accessPath": "Insurance",
        "ui": {
            "label": "Insurance",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Insurance"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": true,
        "dependents": [],
        "type": "FieldGroup",
        "fields": [
            {
                "id": "policyNumber",
                "name": "policyNumber",
                "accessPath": "Insurance.policyNumber",
                "ui": {
                    "label": "Policy Number",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Policy Number"
                    }
                },
                "validation": {
                    "required": true,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "insuranceType",
                "name": "insuranceType",
                "accessPath": "Insurance.insuranceType",
                "ui": {
                    "label": "Insurance Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Insurance Type"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "insuranceProvider",
                "name": "insuranceProvider",
                "accessPath": "Insurance.insuranceProvider",
                "ui": {
                    "label": "Insurance Provider",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Insurance Provider"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "insuranceHolder",
                "name": "insuranceHolder",
                "accessPath": "Insurance.insuranceHolder",
                "ui": {
                    "label": "Insurance Holder",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Insurance Holder"
                    }
                },
                "validation": {
                    "required": false,
                    "max": 255
                },
                "allowMany": false,
                "dependents": [],
                "type": "Text"
            },
            {
                "id": "insuranceValue",
                "name": "insuranceValue",
                "accessPath": "Insurance.insuranceValue",
                "ui": {
                    "label": "Insurance Value",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Insurance Value"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Double"
            },
            {
                "id": "unit",
                "name": "unit",
                "accessPath": "Insurance.unit",
                "ui": {
                    "label": "Unit",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Unit"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "currency",
                "name": "currency",
                "accessPath": "Insurance.currency",
                "ui": {
                    "label": "Currency",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Currency"
                    }
                },
                "validation": {
                    "required": true
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "insuranceStatus",
                "name": "insuranceStatus",
                "accessPath": "Insurance.insuranceStatus",
                "ui": {
                    "label": "Insurance Status",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Insurance Status"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "insuranceSubType",
                "name": "insuranceSubType",
                "accessPath": "Insurance.insuranceSubType",
                "ui": {
                    "label": "Insurance Sub Type",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Insurance Sub Type"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "Picklist",
                "options": {
                    "masterFields": [],
                    "codeField": "Code",
                    "valueField": "Name"
                }
            },
            {
                "id": "effectiveStartDate",
                "name": "effectiveStartDate",
                "accessPath": "Insurance.effectiveStartDate",
                "ui": {
                    "label": "Effective Start Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective Start Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            },
            {
                "id": "effectiveEndDate",
                "name": "effectiveEndDate",
                "accessPath": "Insurance.effectiveEndDate",
                "ui": {
                    "label": "Effective End Date",
                    "localizedLabels": {
                        "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                        "en": "Effective End Date"
                    }
                },
                "validation": {
                    "required": false
                },
                "allowMany": false,
                "dependents": [],
                "type": "DateTime"
            }
        ]
    },
    {
        "id": "policyNumber",
        "name": "policyNumber",
        "accessPath": "Insurance.policyNumber",
        "ui": {
            "label": "Policy Number",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Policy Number"
            }
        },
        "validation": {
            "required": true,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "insuranceType",
        "name": "insuranceType",
        "accessPath": "Insurance.insuranceType",
        "ui": {
            "label": "Insurance Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Insurance Type"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "insuranceProvider",
        "name": "insuranceProvider",
        "accessPath": "Insurance.insuranceProvider",
        "ui": {
            "label": "Insurance Provider",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Insurance Provider"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "insuranceHolder",
        "name": "insuranceHolder",
        "accessPath": "Insurance.insuranceHolder",
        "ui": {
            "label": "Insurance Holder",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Insurance Holder"
            }
        },
        "validation": {
            "required": false,
            "max": 255
        },
        "allowMany": false,
        "dependents": [],
        "type": "Text"
    },
    {
        "id": "insuranceValue",
        "name": "insuranceValue",
        "accessPath": "Insurance.insuranceValue",
        "ui": {
            "label": "Insurance Value",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Insurance Value"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Double"
    },
    {
        "id": "unit",
        "name": "unit",
        "accessPath": "Insurance.unit",
        "ui": {
            "label": "Unit",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Unit"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "currency",
        "name": "currency",
        "accessPath": "Insurance.currency",
        "ui": {
            "label": "Currency",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Currency"
            }
        },
        "validation": {
            "required": true
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "insuranceStatus",
        "name": "insuranceStatus",
        "accessPath": "Insurance.insuranceStatus",
        "ui": {
            "label": "Insurance Status",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Insurance Status"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "insuranceSubType",
        "name": "insuranceSubType",
        "accessPath": "Insurance.insuranceSubType",
        "ui": {
            "label": "Insurance Sub Type",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Insurance Sub Type"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "Picklist",
        "options": {
            "masterFields": [],
            "codeField": "Code",
            "valueField": "Name"
        }
    },
    {
        "id": "effectiveStartDate",
        "name": "effectiveStartDate",
        "accessPath": "Insurance.effectiveStartDate",
        "ui": {
            "label": "Effective Start Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective Start Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    },
    {
        "id": "effectiveEndDate",
        "name": "effectiveEndDate",
        "accessPath": "Insurance.effectiveEndDate",
        "ui": {
            "label": "Effective End Date",
            "localizedLabels": {
                "eClass": "http://informatica.com/mdm/v2/Core#//LocalizedText",
                "en": "Effective End Date"
            }
        },
        "validation": {
            "required": false
        },
        "allowMany": false,
        "dependents": [],
        "type": "DateTime"
    }
]

module.exports = fields;