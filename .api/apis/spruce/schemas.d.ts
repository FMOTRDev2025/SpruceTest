declare const Contact: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contactId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the contact to retrieve";
                };
            };
            readonly required: readonly ["contactId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly apiURL: {
                    readonly description: "An absolute URL for fetching this contact from the API";
                    readonly format: "url";
                    readonly type: "string";
                    readonly examples: readonly ["https://api.sprucehealth.com/contact/entity_0E5QDGJC03000"];
                };
                readonly appURL: {
                    readonly description: "An absolute URL to view the contact in the Spruce app";
                    readonly format: "url";
                    readonly type: "string";
                    readonly examples: readonly ["https://app.sprucehealth.com/org/entity_0D4QABCC06000/contact/entity_0E5QDGJC03000"];
                };
                readonly canDelete: {
                    readonly description: "Whether the contact may be deleted.";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly canEdit: {
                    readonly description: "Whether the contact may be edited.";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly category: {
                    readonly enum: readonly ["patient", "professional", "clinic", "unknown"];
                    readonly type: "string";
                    readonly examples: readonly ["patient"];
                    readonly description: "`patient` `professional` `clinic` `unknown`";
                };
                readonly companyName: {
                    readonly description: "The contact's company. This field can also be used to specify the name of a non-patient contact, such as another healthcare facility.";
                    readonly type: "string";
                    readonly examples: readonly ["Walgreens"];
                };
                readonly created: {
                    readonly description: "The date this contact was added to Spruce";
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2021-01-30T08:30:00Z"];
                };
                readonly customContactFields: {
                    readonly description: "Fields on a contact that are custom";
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly description: "Spruce's contact contact custom field ID";
                                readonly type: "string";
                                readonly examples: readonly ["entityCustomField_0E5QDGJC03000"];
                            };
                            readonly name: {
                                readonly description: "A name for the field";
                                readonly type: "string";
                                readonly examples: readonly ["Preferred Pharmacy"];
                            };
                            readonly value: {
                                readonly description: "The value of the field";
                                readonly type: "string";
                                readonly examples: readonly ["CVS"];
                            };
                        };
                        readonly required: readonly ["id", "name", "value"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly dateOfBirth: {
                    readonly description: "The contact's date of birth in the format YYYY-MM-DD.";
                    readonly format: "date";
                    readonly type: "string";
                    readonly examples: readonly ["2000-01-30"];
                };
                readonly displayName: {
                    readonly description: "The contact's full name for easy display to a user. This is determined by combining the givenName, middleName, and familyName, or if those are all empty, falling back to companyName, phone number or email address.";
                    readonly type: "string";
                    readonly examples: readonly ["Joe William Smith"];
                };
                readonly emailAddresses: {
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly description: "Spruce's phone number ID";
                                readonly format: "string";
                                readonly type: "string";
                                readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                            };
                            readonly label: {
                                readonly description: "A label for the email address such as 'Work', 'Home', etc.";
                                readonly type: "string";
                                readonly examples: readonly ["Work"];
                            };
                            readonly value: {
                                readonly format: "email";
                                readonly type: "string";
                                readonly examples: readonly ["contact@example.com"];
                            };
                        };
                        readonly required: readonly ["id", "value"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly familyName: {
                    readonly description: "The contact's family name (typically last name in US)";
                    readonly type: "string";
                    readonly examples: readonly ["Smith"];
                };
                readonly faxNumbers: {
                    readonly items: {
                        readonly properties: {
                            readonly displayValue: {
                                readonly description: "The contact phone number in an easily readable format.";
                                readonly type: "string";
                                readonly examples: readonly ["(222) 555-0000"];
                            };
                            readonly id: {
                                readonly description: "Spruce's phone number ID";
                                readonly format: "string";
                                readonly type: "string";
                                readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                            };
                            readonly label: {
                                readonly description: "A label for the phone number such as 'Work', 'Home', 'Cell', etc.";
                                readonly type: "string";
                                readonly examples: readonly ["Work"];
                            };
                            readonly value: {
                                readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                                readonly format: "string";
                                readonly type: "string";
                                readonly examples: readonly [12225550000];
                            };
                        };
                        readonly required: readonly ["id", "value", "displayValue"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly gender: {
                    readonly enum: readonly ["unknown", "male", "female", "other"];
                    readonly type: "string";
                    readonly examples: readonly ["unknown"];
                    readonly description: "`unknown` `male` `female` `other`";
                };
                readonly genderDetail: {
                    readonly description: "Optional free-text details for gender";
                    readonly type: "string";
                    readonly examples: readonly ["Non-binary"];
                };
                readonly givenName: {
                    readonly description: "The contact's given name (typically first name in US)";
                    readonly type: "string";
                    readonly examples: readonly ["Joe"];
                };
                readonly hasAccount: {
                    readonly description: "Whether the contact has created a Spruce account for secure messaging, video calling, etc.";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly hasPendingInvite: {
                    readonly description: "Whether the contact has a pending Spruce account invitation";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly id: {
                    readonly description: "Spruce's contact ID";
                    readonly type: "string";
                    readonly examples: readonly ["entity_0E5QDGJC03000"];
                };
                readonly integrationLinks: {
                    readonly description: "Links between a contact and an integrated external system.";
                    readonly items: {
                        readonly properties: {
                            readonly contactId: {
                                readonly description: "Spruce's contact ID";
                                readonly type: "string";
                                readonly examples: readonly ["entity_0E5QDGJC03000"];
                            };
                            readonly externalId: {
                                readonly description: "The id of a contact in an external system.";
                                readonly type: "string";
                                readonly examples: readonly ["elation_140797386655555"];
                            };
                            readonly type: {
                                readonly enum: readonly ["elation", "hint", "athena", "custom"];
                                readonly type: "string";
                                readonly examples: readonly ["elation"];
                                readonly description: "`elation` `hint` `athena` `custom`";
                            };
                            readonly url: {
                                readonly description: "The url of a contact in an integrated external system.";
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["type", "externalId", "contactId"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly internalMemberIds: {
                    readonly description: "The ids of the teammates, teams and/or your organization that are members of the contact. Contact Membership must be enabled for the organization for this field to be interacted with.";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly type: "array";
                };
                readonly middleName: {
                    readonly description: "The contact's middle name";
                    readonly type: "string";
                    readonly examples: readonly ["William"];
                };
                readonly object: {
                    readonly description: "String representing the object's type";
                    readonly type: "string";
                };
                readonly organizationContactFields: {
                    readonly description: "Fields on a contact that are custom";
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly description: "Spruce's contact organization contact custom field ID";
                                readonly type: "string";
                                readonly examples: readonly ["managedCustomField_0E5QDGJC03000"];
                            };
                            readonly name: {
                                readonly description: "A name for the field";
                                readonly type: "string";
                                readonly examples: readonly ["Preferred Pharmacy"];
                            };
                            readonly value: {
                                readonly description: "The value of the field";
                                readonly type: "string";
                                readonly examples: readonly ["CVS"];
                            };
                        };
                        readonly required: readonly ["id", "name", "value"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly phoneNumbers: {
                    readonly items: {
                        readonly properties: {
                            readonly displayValue: {
                                readonly description: "The contact phone number in an easily readable format.";
                                readonly type: "string";
                                readonly examples: readonly ["(222) 555-0000"];
                            };
                            readonly id: {
                                readonly description: "Spruce's phone number ID";
                                readonly format: "string";
                                readonly type: "string";
                                readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                            };
                            readonly label: {
                                readonly description: "A label for the phone number such as 'Work', 'Home', 'Cell', etc.";
                                readonly type: "string";
                                readonly examples: readonly ["Work"];
                            };
                            readonly value: {
                                readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                                readonly format: "string";
                                readonly type: "string";
                                readonly examples: readonly [12225550000];
                            };
                        };
                        readonly required: readonly ["id", "value", "displayValue"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly pronouns: {
                    readonly description: "The contact's pronouns";
                    readonly type: "string";
                    readonly examples: readonly ["he/him"];
                };
                readonly tags: {
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly description: "Spruce's contact tag ID";
                                readonly type: "string";
                                readonly examples: readonly ["tag_0E5QDGJC03000"];
                            };
                            readonly object: {
                                readonly description: "String representing the object's type";
                                readonly type: "string";
                            };
                            readonly value: {
                                readonly description: "The text value of a contact tag";
                                readonly type: "string";
                                readonly examples: readonly ["Smith"];
                            };
                        };
                        readonly required: readonly ["id", "value", "object"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
            };
            readonly required: readonly ["id", "displayName", "tags", "gender", "category", "created", "phoneNumbers", "emailAddresses", "customFields", "appURL", "apiURL", "hasAccount", "hasPendingInvite", "customContactFields", "organizationContactFields", "canDelete", "canEdit", "integrationLinks", "object", "internalMemberIds"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ContactConversations: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contactId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the contact to fetch conversations for";
                };
            };
            readonly required: readonly ["contactId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly conversations: {
                    readonly items: {
                        readonly properties: {
                            readonly apiURL: {
                                readonly description: "An absolute URL for fetching this conversation from the API";
                                readonly format: "url";
                                readonly type: "string";
                                readonly examples: readonly ["https://api.sprucehealth.com/conversations/t_0E5QDJJC03000"];
                            };
                            readonly appURL: {
                                readonly description: "An absolute URL to view the conversation in the Spruce app";
                                readonly format: "url";
                                readonly type: "string";
                                readonly examples: readonly ["https://app.sprucehealth.com/org/entity_0D4QABCC06000/thread/t_0E5QDJJC03000"];
                            };
                            readonly archived: {
                                readonly description: "Whether or not the conversation is archived";
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                            readonly assignedToMemberId: {
                                readonly description: "The id of the teammate the conversation is assigned to";
                                readonly type: "string";
                                readonly examples: readonly ["entity_0D4QABCC06000"];
                            };
                            readonly associatedContactIds: {
                                readonly description: "The ids of the contacts associated with the conversation. This may include contacts that are not a part of the conversation. For example, the conversation may be with parents, but associated with a contact representing their child.";
                                readonly items: {
                                    readonly type: "string";
                                };
                                readonly type: "array";
                                readonly examples: readonly ["entity_0D4QABCC06000"];
                            };
                            readonly createdAt: {
                                readonly description: "The date the conversation was created";
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2020-04-01T00:00:00Z"];
                            };
                            readonly externalParticipants: {
                                readonly description: "The external participants in the conversation.";
                                readonly items: {
                                    readonly properties: {
                                        readonly contact: {
                                            readonly description: "The id of the contact associated with the participant. This will be omitted if the participant is not a saved contact.";
                                            readonly type: "string";
                                            readonly examples: readonly ["entity_0D4QABCC06000"];
                                        };
                                        readonly displayName: {
                                            readonly description: "The display name of the participant";
                                            readonly type: "string";
                                            readonly examples: readonly ["555-555-5555", "John Doe", "patient@example.com"];
                                        };
                                        readonly endpoint: {
                                            readonly description: "The endpoint of the participant, such as their phone number or email address. For secure conversations, there will not be an endpoint.";
                                            readonly properties: {
                                                readonly channel: {
                                                    readonly description: "The channel of the endpoint (e.g. 'email', 'phone', 'fax', etc.). More endpoint channels may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `fax` `secure`";
                                                    readonly enum: readonly ["email", "phone", "fax", "secure"];
                                                    readonly type: "string";
                                                };
                                                readonly displayValue: {
                                                    readonly description: "The display value of the endpoint. This is the value that should be displayed to the user when showing the endpoint, along with the label if it's populated.";
                                                    readonly type: "string";
                                                };
                                                readonly id: {
                                                    readonly description: "The id of the endpoint";
                                                    readonly type: "string";
                                                    readonly examples: readonly [15555555555];
                                                };
                                                readonly isInternal: {
                                                    readonly description: "Internal endpoints are endpoints that are owned by your organization, such as your organization's Spruce Phone Numbers or Spruce Links.";
                                                    readonly type: "boolean";
                                                    readonly examples: readonly [false];
                                                };
                                                readonly label: {
                                                    readonly description: "The optional label of the endpoint";
                                                    readonly type: "string";
                                                    readonly examples: readonly ["Home", "Work"];
                                                };
                                                readonly object: {
                                                    readonly description: "String representing the object's type";
                                                    readonly type: "string";
                                                };
                                                readonly rawValue: {
                                                    readonly description: "The raw value of the endpoint. This can be used for programmatically comparing contact values. The raw value for a phone/fax number will be in E164 format.";
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly required: readonly ["id", "channel", "displayValue", "rawValue", "isInternal", "object"];
                                            readonly type: "object";
                                        };
                                    };
                                    readonly required: readonly ["displayName"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly id: {
                                readonly description: "Spruce's conversation ID";
                                readonly type: "string";
                                readonly examples: readonly ["t_0E5QDGJC03000"];
                            };
                            readonly internalEndpoint: {
                                readonly description: "The internal endpoint of the conversation. For secure conversations, this will be a Spruce Link.";
                                readonly properties: {
                                    readonly channel: {
                                        readonly description: "The channel of the endpoint (e.g. 'email', 'phone', 'fax', etc.). More endpoint channels may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `fax` `secure`";
                                        readonly enum: readonly ["email", "phone", "fax", "secure"];
                                        readonly type: "string";
                                    };
                                    readonly displayValue: {
                                        readonly description: "The display value of the endpoint. This is the value that should be displayed to the user when showing the endpoint, along with the label if it's populated.";
                                        readonly type: "string";
                                    };
                                    readonly id: {
                                        readonly description: "The id of the endpoint";
                                        readonly type: "string";
                                        readonly examples: readonly [15555555555];
                                    };
                                    readonly isInternal: {
                                        readonly description: "Internal endpoints are endpoints that are owned by your organization, such as your organization's Spruce Phone Numbers or Spruce Links.";
                                        readonly type: "boolean";
                                        readonly examples: readonly [false];
                                    };
                                    readonly label: {
                                        readonly description: "The optional label of the endpoint";
                                        readonly type: "string";
                                        readonly examples: readonly ["Home", "Work"];
                                    };
                                    readonly object: {
                                        readonly description: "String representing the object's type";
                                        readonly type: "string";
                                    };
                                    readonly rawValue: {
                                        readonly description: "The raw value of the endpoint. This can be used for programmatically comparing contact values. The raw value for a phone/fax number will be in E164 format.";
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["id", "channel", "displayValue", "rawValue", "isInternal", "object"];
                                readonly type: "object";
                            };
                            readonly internalMemberIds: {
                                readonly description: "The ids of the teammates, teams and/or your organization that are members of the conversation.";
                                readonly items: {
                                    readonly type: "string";
                                };
                                readonly type: "array";
                                readonly examples: readonly ["entity_0D4QABCC06000"];
                            };
                            readonly isReadOnly: {
                                readonly description: "If the conversation is read-only, messages cannot be sent to it.";
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                            readonly lastMessageAt: {
                                readonly description: "The time of the conversations latest message";
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2020-04-01T00:00:00Z"];
                            };
                            readonly object: {
                                readonly description: "String representing the object's type";
                                readonly type: "string";
                            };
                            readonly subtitle: {
                                readonly description: "The subtitle of the conversation";
                                readonly type: "string";
                                readonly examples: readonly ["Billing"];
                            };
                            readonly tags: {
                                readonly items: {
                                    readonly properties: {
                                        readonly id: {
                                            readonly description: "Spruce's conversation tag ID";
                                            readonly type: "string";
                                            readonly examples: readonly ["tag_0E5QDGJC03000"];
                                        };
                                        readonly object: {
                                            readonly description: "String representing the object's type";
                                            readonly type: "string";
                                        };
                                        readonly value: {
                                            readonly description: "The text value of a conversation tag";
                                            readonly type: "string";
                                            readonly examples: readonly ["Smith"];
                                        };
                                    };
                                    readonly required: readonly ["id", "value", "object"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly title: {
                                readonly description: "The title of the conversation";
                                readonly type: "string";
                                readonly examples: readonly ["John Doe"];
                            };
                            readonly type: {
                                readonly description: "The type of the conversation (e.g. 'email', 'phone', 'secure', etc.). Note that SMS will be in a 'phone' conversation, and video calls will be in a 'secure' conversation. More conversation types may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `secure` `fax` `team` `note` `other`";
                                readonly enum: readonly ["email", "phone", "secure", "fax", "team", "note", "other"];
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["appURL", "apiURL", "archived", "createdAt", "id", "isReadOnly", "tags", "type", "title", "object"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
            };
            readonly required: readonly ["conversations"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ContactFields: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly pageSize: {
                    readonly format: "int32";
                    readonly maximum: 500;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "How many tags to return at one time (max 500)";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly fields: {
                    readonly description: "Field names declared by the organization that can be applied to a contact";
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly description: "Spruce's contact organization contact custom field ID";
                                readonly type: "string";
                                readonly examples: readonly ["managedCustomField_0E5QDGJC03000"];
                            };
                            readonly name: {
                                readonly description: "A name for the field";
                                readonly type: "string";
                                readonly examples: readonly ["Preferred Pharmacy"];
                            };
                        };
                        readonly required: readonly ["id", "name"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly hasMore: {
                    readonly type: "boolean";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                };
                readonly totalCount: {
                    readonly format: "int32";
                    readonly type: "integer";
                    readonly examples: readonly [750];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
            };
            readonly required: readonly ["totalCount", "fields", "hasMore"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ContactIntegrationLinks: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contactId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The unique identifier of the contact";
                };
            };
            readonly required: readonly ["contactId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly integrationLinks: {
                    readonly description: "Links between a contact and an integrated external system.";
                    readonly items: {
                        readonly properties: {
                            readonly contactId: {
                                readonly description: "Spruce's contact ID";
                                readonly type: "string";
                                readonly examples: readonly ["entity_0E5QDGJC03000"];
                            };
                            readonly externalId: {
                                readonly description: "The id of a contact in an external system.";
                                readonly type: "string";
                                readonly examples: readonly ["elation_140797386655555"];
                            };
                            readonly type: {
                                readonly enum: readonly ["elation", "hint", "athena", "custom"];
                                readonly type: "string";
                                readonly examples: readonly ["elation"];
                                readonly description: "`elation` `hint` `athena` `custom`";
                            };
                            readonly url: {
                                readonly description: "The url of a contact in an integrated external system.";
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["type", "externalId", "contactId"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
            };
            readonly required: readonly ["integrationLinks"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ContactTags: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly pageSize: {
                    readonly format: "int32";
                    readonly maximum: 500;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "How many tags to return at one time";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly hasMore: {
                    readonly type: "boolean";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                };
                readonly tags: {
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly description: "Spruce's contact tag ID";
                                readonly type: "string";
                                readonly examples: readonly ["tag_0E5QDGJC03000"];
                            };
                            readonly object: {
                                readonly description: "String representing the object's type";
                                readonly type: "string";
                            };
                            readonly value: {
                                readonly description: "The text value of a contact tag";
                                readonly type: "string";
                                readonly examples: readonly ["Smith"];
                            };
                        };
                        readonly required: readonly ["id", "value", "object"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly totalCount: {
                    readonly format: "int32";
                    readonly type: "integer";
                    readonly examples: readonly [750];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
            };
            readonly required: readonly ["totalCount", "tags", "hasMore"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Conversation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly conversationId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the conversation to post to";
                };
            };
            readonly required: readonly ["conversationId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly conversation: {
                    readonly properties: {
                        readonly apiURL: {
                            readonly description: "An absolute URL for fetching this conversation from the API";
                            readonly format: "url";
                            readonly type: "string";
                            readonly examples: readonly ["https://api.sprucehealth.com/conversations/t_0E5QDJJC03000"];
                        };
                        readonly appURL: {
                            readonly description: "An absolute URL to view the conversation in the Spruce app";
                            readonly format: "url";
                            readonly type: "string";
                            readonly examples: readonly ["https://app.sprucehealth.com/org/entity_0D4QABCC06000/thread/t_0E5QDJJC03000"];
                        };
                        readonly archived: {
                            readonly description: "Whether or not the conversation is archived";
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly assignedToMemberId: {
                            readonly description: "The id of the teammate the conversation is assigned to";
                            readonly type: "string";
                            readonly examples: readonly ["entity_0D4QABCC06000"];
                        };
                        readonly associatedContactIds: {
                            readonly description: "The ids of the contacts associated with the conversation. This may include contacts that are not a part of the conversation. For example, the conversation may be with parents, but associated with a contact representing their child.";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly type: "array";
                            readonly examples: readonly ["entity_0D4QABCC06000"];
                        };
                        readonly createdAt: {
                            readonly description: "The date the conversation was created";
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly examples: readonly ["2020-04-01T00:00:00Z"];
                        };
                        readonly externalParticipants: {
                            readonly description: "The external participants in the conversation.";
                            readonly items: {
                                readonly properties: {
                                    readonly contact: {
                                        readonly description: "The id of the contact associated with the participant. This will be omitted if the participant is not a saved contact.";
                                        readonly type: "string";
                                        readonly examples: readonly ["entity_0D4QABCC06000"];
                                    };
                                    readonly displayName: {
                                        readonly description: "The display name of the participant";
                                        readonly type: "string";
                                        readonly examples: readonly ["555-555-5555", "John Doe", "patient@example.com"];
                                    };
                                    readonly endpoint: {
                                        readonly description: "The endpoint of the participant, such as their phone number or email address. For secure conversations, there will not be an endpoint.";
                                        readonly properties: {
                                            readonly channel: {
                                                readonly description: "The channel of the endpoint (e.g. 'email', 'phone', 'fax', etc.). More endpoint channels may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `fax` `secure`";
                                                readonly enum: readonly ["email", "phone", "fax", "secure"];
                                                readonly type: "string";
                                            };
                                            readonly displayValue: {
                                                readonly description: "The display value of the endpoint. This is the value that should be displayed to the user when showing the endpoint, along with the label if it's populated.";
                                                readonly type: "string";
                                            };
                                            readonly id: {
                                                readonly description: "The id of the endpoint";
                                                readonly type: "string";
                                                readonly examples: readonly [15555555555];
                                            };
                                            readonly isInternal: {
                                                readonly description: "Internal endpoints are endpoints that are owned by your organization, such as your organization's Spruce Phone Numbers or Spruce Links.";
                                                readonly type: "boolean";
                                                readonly examples: readonly [false];
                                            };
                                            readonly label: {
                                                readonly description: "The optional label of the endpoint";
                                                readonly type: "string";
                                                readonly examples: readonly ["Home", "Work"];
                                            };
                                            readonly object: {
                                                readonly description: "String representing the object's type";
                                                readonly type: "string";
                                            };
                                            readonly rawValue: {
                                                readonly description: "The raw value of the endpoint. This can be used for programmatically comparing contact values. The raw value for a phone/fax number will be in E164 format.";
                                                readonly type: "string";
                                            };
                                        };
                                        readonly required: readonly ["id", "channel", "displayValue", "rawValue", "isInternal", "object"];
                                        readonly type: "object";
                                    };
                                };
                                readonly required: readonly ["displayName"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                        readonly id: {
                            readonly description: "Spruce's conversation ID";
                            readonly type: "string";
                            readonly examples: readonly ["t_0E5QDGJC03000"];
                        };
                        readonly internalEndpoint: {
                            readonly description: "The internal endpoint of the conversation. For secure conversations, this will be a Spruce Link.";
                            readonly properties: {
                                readonly channel: {
                                    readonly description: "The channel of the endpoint (e.g. 'email', 'phone', 'fax', etc.). More endpoint channels may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `fax` `secure`";
                                    readonly enum: readonly ["email", "phone", "fax", "secure"];
                                    readonly type: "string";
                                };
                                readonly displayValue: {
                                    readonly description: "The display value of the endpoint. This is the value that should be displayed to the user when showing the endpoint, along with the label if it's populated.";
                                    readonly type: "string";
                                };
                                readonly id: {
                                    readonly description: "The id of the endpoint";
                                    readonly type: "string";
                                    readonly examples: readonly [15555555555];
                                };
                                readonly isInternal: {
                                    readonly description: "Internal endpoints are endpoints that are owned by your organization, such as your organization's Spruce Phone Numbers or Spruce Links.";
                                    readonly type: "boolean";
                                    readonly examples: readonly [false];
                                };
                                readonly label: {
                                    readonly description: "The optional label of the endpoint";
                                    readonly type: "string";
                                    readonly examples: readonly ["Home", "Work"];
                                };
                                readonly object: {
                                    readonly description: "String representing the object's type";
                                    readonly type: "string";
                                };
                                readonly rawValue: {
                                    readonly description: "The raw value of the endpoint. This can be used for programmatically comparing contact values. The raw value for a phone/fax number will be in E164 format.";
                                    readonly type: "string";
                                };
                            };
                            readonly required: readonly ["id", "channel", "displayValue", "rawValue", "isInternal", "object"];
                            readonly type: "object";
                        };
                        readonly internalMemberIds: {
                            readonly description: "The ids of the teammates, teams and/or your organization that are members of the conversation.";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly type: "array";
                            readonly examples: readonly ["entity_0D4QABCC06000"];
                        };
                        readonly isReadOnly: {
                            readonly description: "If the conversation is read-only, messages cannot be sent to it.";
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly lastMessageAt: {
                            readonly description: "The time of the conversations latest message";
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly examples: readonly ["2020-04-01T00:00:00Z"];
                        };
                        readonly object: {
                            readonly description: "String representing the object's type";
                            readonly type: "string";
                        };
                        readonly subtitle: {
                            readonly description: "The subtitle of the conversation";
                            readonly type: "string";
                            readonly examples: readonly ["Billing"];
                        };
                        readonly tags: {
                            readonly items: {
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "Spruce's conversation tag ID";
                                        readonly type: "string";
                                        readonly examples: readonly ["tag_0E5QDGJC03000"];
                                    };
                                    readonly object: {
                                        readonly description: "String representing the object's type";
                                        readonly type: "string";
                                    };
                                    readonly value: {
                                        readonly description: "The text value of a conversation tag";
                                        readonly type: "string";
                                        readonly examples: readonly ["Smith"];
                                    };
                                };
                                readonly required: readonly ["id", "value", "object"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                        readonly title: {
                            readonly description: "The title of the conversation";
                            readonly type: "string";
                            readonly examples: readonly ["John Doe"];
                        };
                        readonly type: {
                            readonly description: "The type of the conversation (e.g. 'email', 'phone', 'secure', etc.). Note that SMS will be in a 'phone' conversation, and video calls will be in a 'secure' conversation. More conversation types may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `secure` `fax` `team` `note` `other`";
                            readonly enum: readonly ["email", "phone", "secure", "fax", "team", "note", "other"];
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["appURL", "apiURL", "archived", "createdAt", "id", "isReadOnly", "tags", "type", "title", "object"];
                    readonly type: "object";
                };
            };
            readonly required: readonly ["conversation"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ConversationItem: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly conversationItemId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the conversation to post to";
                };
            };
            readonly required: readonly ["conversationItemId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly conversationItem: {
                    readonly properties: {
                        readonly apiURL: {
                            readonly description: "An absolute URL for fetching this conversation item from the API";
                            readonly format: "url";
                            readonly type: "string";
                            readonly examples: readonly ["https://api.sprucehealth.com/conversationItems/ti_0E5QDJJC03000"];
                        };
                        readonly appURL: {
                            readonly description: "An absolute URL to view the conversation item in the Spruce app.";
                            readonly format: "url";
                            readonly type: "string";
                            readonly examples: readonly ["https://app.sprucehealth.com/org/entity_0D4QABCC06000/thread/t_0E5QDJJC03000/message/ti_23170B3D36G00"];
                        };
                        readonly attachments: {
                            readonly description: "Attachments for the conversation item.";
                            readonly items: {
                                readonly properties: {
                                    readonly data: {
                                        readonly anyOf: readonly [{
                                            readonly properties: {
                                                readonly mimetype: {
                                                    readonly description: "The mimetype of the audio attachment.";
                                                    readonly type: "string";
                                                    readonly examples: readonly ["audio/mpeg"];
                                                };
                                                readonly signedUrl: {
                                                    readonly description: "The URL used to fetch the audio attachment.";
                                                    readonly properties: {
                                                        readonly expiresAt: {
                                                            readonly description: "The date the signed URL expires.";
                                                            readonly format: "date-time";
                                                            readonly type: "string";
                                                        };
                                                        readonly url: {
                                                            readonly description: "The signed URL.";
                                                            readonly format: "url";
                                                            readonly type: "string";
                                                        };
                                                    };
                                                    readonly required: readonly ["url", "expiresAt"];
                                                    readonly type: "object";
                                                };
                                            };
                                            readonly required: readonly ["mimetype", "signedUrl"];
                                            readonly type: "object";
                                        }, {
                                            readonly properties: {
                                                readonly mimetype: {
                                                    readonly description: "The mimetype of the document attachment.";
                                                    readonly type: "string";
                                                    readonly examples: readonly ["application/pdf"];
                                                };
                                                readonly name: {
                                                    readonly description: "The name associated with the attached document.";
                                                    readonly type: "string";
                                                };
                                                readonly signedUrl: {
                                                    readonly description: "The URL used to fetch the document attachment.";
                                                    readonly properties: {
                                                        readonly expiresAt: {
                                                            readonly description: "The date the signed URL expires.";
                                                            readonly format: "date-time";
                                                            readonly type: "string";
                                                        };
                                                        readonly url: {
                                                            readonly description: "The signed URL.";
                                                            readonly format: "url";
                                                            readonly type: "string";
                                                        };
                                                    };
                                                    readonly required: readonly ["url", "expiresAt"];
                                                    readonly type: "object";
                                                };
                                            };
                                            readonly required: readonly ["name", "mimetype", "signedUrl"];
                                            readonly type: "object";
                                        }, {
                                            readonly properties: {
                                                readonly title: {
                                                    readonly description: "The title associated with the attached entity profile.";
                                                    readonly type: "string";
                                                    readonly examples: readonly ["John Smith"];
                                                };
                                                readonly url: {
                                                    readonly description: "The URL of the entity profile.";
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly required: readonly ["title", "url"];
                                            readonly type: "object";
                                        }, {
                                            readonly properties: {
                                                readonly mimetype: {
                                                    readonly description: "The mimetype of the image attachment.";
                                                    readonly type: "string";
                                                    readonly examples: readonly ["image/png"];
                                                };
                                                readonly signedUrl: {
                                                    readonly description: "The URL used to fetch the image attachment.";
                                                    readonly properties: {
                                                        readonly expiresAt: {
                                                            readonly description: "The date the signed URL expires.";
                                                            readonly format: "date-time";
                                                            readonly type: "string";
                                                        };
                                                        readonly url: {
                                                            readonly description: "The signed URL.";
                                                            readonly format: "url";
                                                            readonly type: "string";
                                                        };
                                                    };
                                                    readonly required: readonly ["url", "expiresAt"];
                                                    readonly type: "object";
                                                };
                                            };
                                            readonly required: readonly ["mimetype", "signedUrl"];
                                            readonly type: "object";
                                        }, {
                                            readonly properties: {
                                                readonly mimetype: {
                                                    readonly description: "The mimetype of the video attachment.";
                                                    readonly type: "string";
                                                    readonly examples: readonly ["video/mp4"];
                                                };
                                                readonly signedUrl: {
                                                    readonly description: "The URL used to fetch the video attachment.";
                                                    readonly properties: {
                                                        readonly expiresAt: {
                                                            readonly description: "The date the signed URL expires.";
                                                            readonly format: "date-time";
                                                            readonly type: "string";
                                                        };
                                                        readonly url: {
                                                            readonly description: "The signed URL.";
                                                            readonly format: "url";
                                                            readonly type: "string";
                                                        };
                                                    };
                                                    readonly required: readonly ["url", "expiresAt"];
                                                    readonly type: "object";
                                                };
                                            };
                                            readonly required: readonly ["mimetype", "signedUrl"];
                                            readonly type: "object";
                                        }];
                                    };
                                    readonly title: {
                                        readonly description: "The title of the attachment.";
                                        readonly type: "string";
                                        readonly examples: readonly ["example.pdf"];
                                    };
                                    readonly type: {
                                        readonly description: "The type of the attachment.";
                                        readonly enum: readonly ["audio", "carePlan", "document", "entityProfile", "genericUrl", "image", "paymentRequest", "video", "visit"];
                                    };
                                };
                                readonly required: readonly ["title", "type"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                        readonly author: {
                            readonly description: "The author of the conversation item.";
                            readonly properties: {
                                readonly deviceInformation: {
                                    readonly properties: {
                                        readonly accessID: {
                                            readonly description: "The access ID of API credentials used to make the request.";
                                            readonly type: "string";
                                        };
                                        readonly appVersion: {
                                            readonly description: "The version of the app.";
                                            readonly type: "string";
                                        };
                                        readonly device: {
                                            readonly description: "The type of the device.";
                                            readonly type: "string";
                                        };
                                        readonly deviceId: {
                                            readonly description: "The id of the device.";
                                            readonly type: "string";
                                        };
                                        readonly deviceModel: {
                                            readonly description: "The model of the device.";
                                            readonly type: "string";
                                        };
                                        readonly platform: {
                                            readonly description: "The platform of the device.";
                                            readonly type: "string";
                                        };
                                    };
                                    readonly type: "object";
                                };
                                readonly displayName: {
                                    readonly type: "string";
                                };
                            };
                            readonly required: readonly ["displayName"];
                            readonly type: "object";
                        };
                        readonly buttons: {
                            readonly description: "The buttons associated with the conversation item.";
                            readonly items: {
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "The id of the button.";
                                        readonly type: "string";
                                    };
                                    readonly state: {
                                        readonly description: "The state of the button.\n\n`disabled` `normal` `selected`";
                                        readonly enum: readonly ["disabled", "normal", "selected"];
                                        readonly type: "string";
                                    };
                                    readonly text: {
                                        readonly description: "The text of the button.";
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["id", "text", "state"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                        readonly canDelete: {
                            readonly description: "If the conversation item can be deleted.";
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                        readonly conversationId: {
                            readonly description: "Spruce's conversation ID";
                            readonly type: "string";
                            readonly examples: readonly ["t_0E5QDGJC03000"];
                        };
                        readonly createdAt: {
                            readonly description: "The date time the conversation item was created.";
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly examples: readonly ["2020-04-01T00:00:00Z"];
                        };
                        readonly direction: {
                            readonly description: "The direction of the item relative to this organization. Possible values are `inbound`, `outbound` and `none`. `inbound` indicates a message received by the organization, `outbound` indicates a message sent to an external contact by a teammate in the organization. `none` indicates a message that is likely internal to the organization or one for which the direction cannot be determined.";
                            readonly enum: readonly ["inbound", "outbound", "none"];
                        };
                        readonly event: {
                            readonly description: "Any event data associate with the conversation item.";
                            readonly properties: {
                                readonly data: {
                                    readonly anyOf: readonly [{
                                        readonly properties: {
                                            readonly answered: {
                                                readonly description: "If the call was answered.";
                                                readonly type: "boolean";
                                            };
                                            readonly answeredBy: {
                                                readonly description: "If an inbound call was answered, which desk phone or external phone number answered it.";
                                                readonly properties: {
                                                    readonly externalNumber: {
                                                        readonly description: "the telephone number external to Spruce this call was answered by";
                                                        readonly type: "string";
                                                    };
                                                    readonly lineId: {
                                                        readonly description: "the ID of the phone line on the Spruce system this call was answered by";
                                                        readonly type: "string";
                                                    };
                                                };
                                                readonly type: "object";
                                            };
                                            readonly duration: {
                                                readonly description: "The duration of the call in seconds.";
                                                readonly type: "integer";
                                            };
                                            readonly failed: {
                                                readonly description: "If the call failed.";
                                                readonly type: "boolean";
                                            };
                                            readonly initiatedBy: {
                                                readonly description: "For outbound calls, which desk phone or teammate initiated it.";
                                                readonly properties: {
                                                    readonly lineId: {
                                                        readonly description: "the ID of the phone line on the Spruce system this call was initiated by";
                                                        readonly type: "string";
                                                    };
                                                    readonly teammateID: {
                                                        readonly description: "The id of the teammate";
                                                        readonly type: "string";
                                                        readonly examples: readonly ["entity_0E5QDGJC03000"];
                                                    };
                                                };
                                                readonly type: "object";
                                            };
                                            readonly recordings: {
                                                readonly description: "The recordings of the call if any exist.";
                                                readonly items: {
                                                    readonly properties: {
                                                        readonly mimetype: {
                                                            readonly description: "The mimetype of the audio attachment.";
                                                            readonly type: "string";
                                                            readonly examples: readonly ["audio/mpeg"];
                                                        };
                                                        readonly signedUrl: {
                                                            readonly description: "The URL used to fetch the audio attachment.";
                                                            readonly properties: {
                                                                readonly expiresAt: {
                                                                    readonly description: "The date the signed URL expires.";
                                                                    readonly format: "date-time";
                                                                    readonly type: "string";
                                                                };
                                                                readonly url: {
                                                                    readonly description: "The signed URL.";
                                                                    readonly format: "url";
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly required: readonly ["url", "expiresAt"];
                                                            readonly type: "object";
                                                        };
                                                    };
                                                    readonly required: readonly ["mimetype", "signedUrl"];
                                                    readonly type: "object";
                                                };
                                                readonly type: "array";
                                            };
                                            readonly spam: {
                                                readonly description: "If the call was marked as spam.";
                                                readonly type: "boolean";
                                            };
                                            readonly voicemail: {
                                                readonly properties: {
                                                    readonly mimetype: {
                                                        readonly description: "The mimetype of the audio attachment.";
                                                        readonly type: "string";
                                                        readonly examples: readonly ["audio/mpeg"];
                                                    };
                                                    readonly signedUrl: {
                                                        readonly description: "The URL used to fetch the audio attachment.";
                                                        readonly properties: {
                                                            readonly expiresAt: {
                                                                readonly description: "The date the signed URL expires.";
                                                                readonly format: "date-time";
                                                                readonly type: "string";
                                                            };
                                                            readonly url: {
                                                                readonly description: "The signed URL.";
                                                                readonly format: "url";
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly required: readonly ["url", "expiresAt"];
                                                        readonly type: "object";
                                                    };
                                                };
                                                readonly required: readonly ["mimetype", "signedUrl"];
                                                readonly type: "object";
                                            };
                                        };
                                        readonly required: readonly ["answered", "duration", "failed", "inbound", "spam"];
                                        readonly type: "object";
                                    }, {
                                        readonly properties: {
                                            readonly answered: {
                                                readonly description: "If the call was answered.";
                                                readonly type: "boolean";
                                            };
                                            readonly duration: {
                                                readonly description: "The duration of the call in seconds.";
                                                readonly type: "integer";
                                            };
                                            readonly initiatedBy: {
                                                readonly description: "The Spruce is of the teammate that initiated it..";
                                                readonly type: "string";
                                                readonly examples: readonly ["entity_0E5QDGJC03000"];
                                            };
                                        };
                                        readonly required: readonly ["answered", "duration", "initiatedBy"];
                                        readonly type: "object";
                                    }];
                                };
                                readonly type: {
                                    readonly description: "The type of the event. Additional events will be added in the future, so any parsing of this field should gracefully handle unexpected values.";
                                    readonly enum: readonly ["inboundCall", "inboundVideoCall", "outboundCall", "outboundVideoCall"];
                                };
                            };
                            readonly required: readonly ["type"];
                            readonly type: "object";
                        };
                        readonly id: {
                            readonly description: "The id of a conversation item.";
                            readonly type: "string";
                            readonly examples: readonly ["ti_0D4QABCC06000"];
                        };
                        readonly isInternalNote: {
                            readonly description: "If the conversation item is an internal note - which is visible only to the posting side of the conversation.";
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly modifiedAt: {
                            readonly description: "The date time the conversation item was last modified.";
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly examples: readonly ["2020-04-01T00:00:00Z"];
                        };
                        readonly object: {
                            readonly description: "String representing the object's type";
                            readonly type: "string";
                        };
                        readonly pages: {
                            readonly description: "The pages associated with the conversation item.";
                            readonly items: {
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "The id of the page.";
                                        readonly type: "string";
                                    };
                                    readonly memberId: {
                                        readonly description: "The id of the teammate being paged.";
                                        readonly type: "string";
                                        readonly examples: readonly ["entity_0D4QABCC06000"];
                                    };
                                    readonly resolved: {
                                        readonly description: "If the page has been resolved.";
                                        readonly type: "boolean";
                                    };
                                    readonly resolvedAt: {
                                        readonly description: "The date time the page was resolved at.";
                                        readonly format: "date-time";
                                        readonly type: "string";
                                        readonly examples: readonly ["2020-04-01T00:00:00Z"];
                                    };
                                    readonly resolvedByMemberId: {
                                        readonly description: "The id of the teammate that resolved the page.";
                                        readonly type: "string";
                                        readonly examples: readonly ["entity_0D4QABCC06000"];
                                    };
                                };
                                readonly required: readonly ["id", "memberId", "resolved"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                        readonly requestId: {
                            readonly description: "The id of an asynchronous request";
                            readonly type: "string";
                            readonly examples: readonly ["asyncRequest_0D4QABCC06000"];
                        };
                        readonly text: {
                            readonly description: "The text of the conversation item. If the conversation item contains pages, they will be listed in the pages property.";
                            readonly type: "string";
                            readonly examples: readonly ["Can you look at this @Dr. Smith?"];
                        };
                    };
                    readonly required: readonly ["id", "conversationId", "attachments", "author", "direction", "isInternalNote", "appURL", "apiURL", "text", "pages", "buttons", "modifiedAt", "createdAt", "object", "requestId", "canDelete"];
                    readonly type: "object";
                };
            };
            readonly required: readonly ["conversationItem"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ConversationItems: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly conversationId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the conversation to post to";
                };
            };
            readonly required: readonly ["conversationId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly pageSize: {
                    readonly format: "int32";
                    readonly maximum: 200;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "How many conversation items to return at one time (max 200)";
                };
                readonly order: {
                    readonly description: "The order in which conversation items are returned.";
                    readonly enum: readonly ["newest_first", "oldest_first"];
                    readonly type: "string";
                    readonly examples: readonly ["newest_first"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly startFrom: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2020-04-01T00:00:00Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The created time after which to query for new items in a conversation.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly conversationItems: {
                    readonly items: {
                        readonly properties: {
                            readonly apiURL: {
                                readonly description: "An absolute URL for fetching this conversation item from the API";
                                readonly format: "url";
                                readonly type: "string";
                                readonly examples: readonly ["https://api.sprucehealth.com/conversationItems/ti_0E5QDJJC03000"];
                            };
                            readonly appURL: {
                                readonly description: "An absolute URL to view the conversation item in the Spruce app.";
                                readonly format: "url";
                                readonly type: "string";
                                readonly examples: readonly ["https://app.sprucehealth.com/org/entity_0D4QABCC06000/thread/t_0E5QDJJC03000/message/ti_23170B3D36G00"];
                            };
                            readonly attachments: {
                                readonly description: "Attachments for the conversation item.";
                                readonly items: {
                                    readonly properties: {
                                        readonly data: {
                                            readonly anyOf: readonly [{
                                                readonly properties: {
                                                    readonly mimetype: {
                                                        readonly description: "The mimetype of the audio attachment.";
                                                        readonly type: "string";
                                                        readonly examples: readonly ["audio/mpeg"];
                                                    };
                                                    readonly signedUrl: {
                                                        readonly description: "The URL used to fetch the audio attachment.";
                                                        readonly properties: {
                                                            readonly expiresAt: {
                                                                readonly description: "The date the signed URL expires.";
                                                                readonly format: "date-time";
                                                                readonly type: "string";
                                                            };
                                                            readonly url: {
                                                                readonly description: "The signed URL.";
                                                                readonly format: "url";
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly required: readonly ["url", "expiresAt"];
                                                        readonly type: "object";
                                                    };
                                                };
                                                readonly required: readonly ["mimetype", "signedUrl"];
                                                readonly type: "object";
                                            }, {
                                                readonly properties: {
                                                    readonly mimetype: {
                                                        readonly description: "The mimetype of the document attachment.";
                                                        readonly type: "string";
                                                        readonly examples: readonly ["application/pdf"];
                                                    };
                                                    readonly name: {
                                                        readonly description: "The name associated with the attached document.";
                                                        readonly type: "string";
                                                    };
                                                    readonly signedUrl: {
                                                        readonly description: "The URL used to fetch the document attachment.";
                                                        readonly properties: {
                                                            readonly expiresAt: {
                                                                readonly description: "The date the signed URL expires.";
                                                                readonly format: "date-time";
                                                                readonly type: "string";
                                                            };
                                                            readonly url: {
                                                                readonly description: "The signed URL.";
                                                                readonly format: "url";
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly required: readonly ["url", "expiresAt"];
                                                        readonly type: "object";
                                                    };
                                                };
                                                readonly required: readonly ["name", "mimetype", "signedUrl"];
                                                readonly type: "object";
                                            }, {
                                                readonly properties: {
                                                    readonly title: {
                                                        readonly description: "The title associated with the attached entity profile.";
                                                        readonly type: "string";
                                                        readonly examples: readonly ["John Smith"];
                                                    };
                                                    readonly url: {
                                                        readonly description: "The URL of the entity profile.";
                                                        readonly type: "string";
                                                    };
                                                };
                                                readonly required: readonly ["title", "url"];
                                                readonly type: "object";
                                            }, {
                                                readonly properties: {
                                                    readonly mimetype: {
                                                        readonly description: "The mimetype of the image attachment.";
                                                        readonly type: "string";
                                                        readonly examples: readonly ["image/png"];
                                                    };
                                                    readonly signedUrl: {
                                                        readonly description: "The URL used to fetch the image attachment.";
                                                        readonly properties: {
                                                            readonly expiresAt: {
                                                                readonly description: "The date the signed URL expires.";
                                                                readonly format: "date-time";
                                                                readonly type: "string";
                                                            };
                                                            readonly url: {
                                                                readonly description: "The signed URL.";
                                                                readonly format: "url";
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly required: readonly ["url", "expiresAt"];
                                                        readonly type: "object";
                                                    };
                                                };
                                                readonly required: readonly ["mimetype", "signedUrl"];
                                                readonly type: "object";
                                            }, {
                                                readonly properties: {
                                                    readonly mimetype: {
                                                        readonly description: "The mimetype of the video attachment.";
                                                        readonly type: "string";
                                                        readonly examples: readonly ["video/mp4"];
                                                    };
                                                    readonly signedUrl: {
                                                        readonly description: "The URL used to fetch the video attachment.";
                                                        readonly properties: {
                                                            readonly expiresAt: {
                                                                readonly description: "The date the signed URL expires.";
                                                                readonly format: "date-time";
                                                                readonly type: "string";
                                                            };
                                                            readonly url: {
                                                                readonly description: "The signed URL.";
                                                                readonly format: "url";
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly required: readonly ["url", "expiresAt"];
                                                        readonly type: "object";
                                                    };
                                                };
                                                readonly required: readonly ["mimetype", "signedUrl"];
                                                readonly type: "object";
                                            }];
                                        };
                                        readonly title: {
                                            readonly description: "The title of the attachment.";
                                            readonly type: "string";
                                            readonly examples: readonly ["example.pdf"];
                                        };
                                        readonly type: {
                                            readonly description: "The type of the attachment.";
                                            readonly enum: readonly ["audio", "carePlan", "document", "entityProfile", "genericUrl", "image", "paymentRequest", "video", "visit"];
                                        };
                                    };
                                    readonly required: readonly ["title", "type"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly author: {
                                readonly description: "The author of the conversation item.";
                                readonly properties: {
                                    readonly deviceInformation: {
                                        readonly properties: {
                                            readonly accessID: {
                                                readonly description: "The access ID of API credentials used to make the request.";
                                                readonly type: "string";
                                            };
                                            readonly appVersion: {
                                                readonly description: "The version of the app.";
                                                readonly type: "string";
                                            };
                                            readonly device: {
                                                readonly description: "The type of the device.";
                                                readonly type: "string";
                                            };
                                            readonly deviceId: {
                                                readonly description: "The id of the device.";
                                                readonly type: "string";
                                            };
                                            readonly deviceModel: {
                                                readonly description: "The model of the device.";
                                                readonly type: "string";
                                            };
                                            readonly platform: {
                                                readonly description: "The platform of the device.";
                                                readonly type: "string";
                                            };
                                        };
                                        readonly type: "object";
                                    };
                                    readonly displayName: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["displayName"];
                                readonly type: "object";
                            };
                            readonly buttons: {
                                readonly description: "The buttons associated with the conversation item.";
                                readonly items: {
                                    readonly properties: {
                                        readonly id: {
                                            readonly description: "The id of the button.";
                                            readonly type: "string";
                                        };
                                        readonly state: {
                                            readonly description: "The state of the button.\n\n`disabled` `normal` `selected`";
                                            readonly enum: readonly ["disabled", "normal", "selected"];
                                            readonly type: "string";
                                        };
                                        readonly text: {
                                            readonly description: "The text of the button.";
                                            readonly type: "string";
                                        };
                                    };
                                    readonly required: readonly ["id", "text", "state"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly canDelete: {
                                readonly description: "If the conversation item can be deleted.";
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly conversationId: {
                                readonly description: "Spruce's conversation ID";
                                readonly type: "string";
                                readonly examples: readonly ["t_0E5QDGJC03000"];
                            };
                            readonly createdAt: {
                                readonly description: "The date time the conversation item was created.";
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2020-04-01T00:00:00Z"];
                            };
                            readonly direction: {
                                readonly description: "The direction of the item relative to this organization. Possible values are `inbound`, `outbound` and `none`. `inbound` indicates a message received by the organization, `outbound` indicates a message sent to an external contact by a teammate in the organization. `none` indicates a message that is likely internal to the organization or one for which the direction cannot be determined.";
                                readonly enum: readonly ["inbound", "outbound", "none"];
                            };
                            readonly event: {
                                readonly description: "Any event data associate with the conversation item.";
                                readonly properties: {
                                    readonly data: {
                                        readonly anyOf: readonly [{
                                            readonly properties: {
                                                readonly answered: {
                                                    readonly description: "If the call was answered.";
                                                    readonly type: "boolean";
                                                };
                                                readonly answeredBy: {
                                                    readonly description: "If an inbound call was answered, which desk phone or external phone number answered it.";
                                                    readonly properties: {
                                                        readonly externalNumber: {
                                                            readonly description: "the telephone number external to Spruce this call was answered by";
                                                            readonly type: "string";
                                                        };
                                                        readonly lineId: {
                                                            readonly description: "the ID of the phone line on the Spruce system this call was answered by";
                                                            readonly type: "string";
                                                        };
                                                    };
                                                    readonly type: "object";
                                                };
                                                readonly duration: {
                                                    readonly description: "The duration of the call in seconds.";
                                                    readonly type: "integer";
                                                };
                                                readonly failed: {
                                                    readonly description: "If the call failed.";
                                                    readonly type: "boolean";
                                                };
                                                readonly initiatedBy: {
                                                    readonly description: "For outbound calls, which desk phone or teammate initiated it.";
                                                    readonly properties: {
                                                        readonly lineId: {
                                                            readonly description: "the ID of the phone line on the Spruce system this call was initiated by";
                                                            readonly type: "string";
                                                        };
                                                        readonly teammateID: {
                                                            readonly description: "The id of the teammate";
                                                            readonly type: "string";
                                                            readonly examples: readonly ["entity_0E5QDGJC03000"];
                                                        };
                                                    };
                                                    readonly type: "object";
                                                };
                                                readonly recordings: {
                                                    readonly description: "The recordings of the call if any exist.";
                                                    readonly items: {
                                                        readonly properties: {
                                                            readonly mimetype: {
                                                                readonly description: "The mimetype of the audio attachment.";
                                                                readonly type: "string";
                                                                readonly examples: readonly ["audio/mpeg"];
                                                            };
                                                            readonly signedUrl: {
                                                                readonly description: "The URL used to fetch the audio attachment.";
                                                                readonly properties: {
                                                                    readonly expiresAt: {
                                                                        readonly description: "The date the signed URL expires.";
                                                                        readonly format: "date-time";
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly url: {
                                                                        readonly description: "The signed URL.";
                                                                        readonly format: "url";
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                                readonly required: readonly ["url", "expiresAt"];
                                                                readonly type: "object";
                                                            };
                                                        };
                                                        readonly required: readonly ["mimetype", "signedUrl"];
                                                        readonly type: "object";
                                                    };
                                                    readonly type: "array";
                                                };
                                                readonly spam: {
                                                    readonly description: "If the call was marked as spam.";
                                                    readonly type: "boolean";
                                                };
                                                readonly voicemail: {
                                                    readonly properties: {
                                                        readonly mimetype: {
                                                            readonly description: "The mimetype of the audio attachment.";
                                                            readonly type: "string";
                                                            readonly examples: readonly ["audio/mpeg"];
                                                        };
                                                        readonly signedUrl: {
                                                            readonly description: "The URL used to fetch the audio attachment.";
                                                            readonly properties: {
                                                                readonly expiresAt: {
                                                                    readonly description: "The date the signed URL expires.";
                                                                    readonly format: "date-time";
                                                                    readonly type: "string";
                                                                };
                                                                readonly url: {
                                                                    readonly description: "The signed URL.";
                                                                    readonly format: "url";
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly required: readonly ["url", "expiresAt"];
                                                            readonly type: "object";
                                                        };
                                                    };
                                                    readonly required: readonly ["mimetype", "signedUrl"];
                                                    readonly type: "object";
                                                };
                                            };
                                            readonly required: readonly ["answered", "duration", "failed", "inbound", "spam"];
                                            readonly type: "object";
                                        }, {
                                            readonly properties: {
                                                readonly answered: {
                                                    readonly description: "If the call was answered.";
                                                    readonly type: "boolean";
                                                };
                                                readonly duration: {
                                                    readonly description: "The duration of the call in seconds.";
                                                    readonly type: "integer";
                                                };
                                                readonly initiatedBy: {
                                                    readonly description: "The Spruce is of the teammate that initiated it..";
                                                    readonly type: "string";
                                                    readonly examples: readonly ["entity_0E5QDGJC03000"];
                                                };
                                            };
                                            readonly required: readonly ["answered", "duration", "initiatedBy"];
                                            readonly type: "object";
                                        }];
                                    };
                                    readonly type: {
                                        readonly description: "The type of the event. Additional events will be added in the future, so any parsing of this field should gracefully handle unexpected values.";
                                        readonly enum: readonly ["inboundCall", "inboundVideoCall", "outboundCall", "outboundVideoCall"];
                                    };
                                };
                                readonly required: readonly ["type"];
                                readonly type: "object";
                            };
                            readonly id: {
                                readonly description: "The id of a conversation item.";
                                readonly type: "string";
                                readonly examples: readonly ["ti_0D4QABCC06000"];
                            };
                            readonly isInternalNote: {
                                readonly description: "If the conversation item is an internal note - which is visible only to the posting side of the conversation.";
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                            readonly modifiedAt: {
                                readonly description: "The date time the conversation item was last modified.";
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2020-04-01T00:00:00Z"];
                            };
                            readonly object: {
                                readonly description: "String representing the object's type";
                                readonly type: "string";
                            };
                            readonly pages: {
                                readonly description: "The pages associated with the conversation item.";
                                readonly items: {
                                    readonly properties: {
                                        readonly id: {
                                            readonly description: "The id of the page.";
                                            readonly type: "string";
                                        };
                                        readonly memberId: {
                                            readonly description: "The id of the teammate being paged.";
                                            readonly type: "string";
                                            readonly examples: readonly ["entity_0D4QABCC06000"];
                                        };
                                        readonly resolved: {
                                            readonly description: "If the page has been resolved.";
                                            readonly type: "boolean";
                                        };
                                        readonly resolvedAt: {
                                            readonly description: "The date time the page was resolved at.";
                                            readonly format: "date-time";
                                            readonly type: "string";
                                            readonly examples: readonly ["2020-04-01T00:00:00Z"];
                                        };
                                        readonly resolvedByMemberId: {
                                            readonly description: "The id of the teammate that resolved the page.";
                                            readonly type: "string";
                                            readonly examples: readonly ["entity_0D4QABCC06000"];
                                        };
                                    };
                                    readonly required: readonly ["id", "memberId", "resolved"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly requestId: {
                                readonly description: "The id of an asynchronous request";
                                readonly type: "string";
                                readonly examples: readonly ["asyncRequest_0D4QABCC06000"];
                            };
                            readonly text: {
                                readonly description: "The text of the conversation item. If the conversation item contains pages, they will be listed in the pages property.";
                                readonly type: "string";
                                readonly examples: readonly ["Can you look at this @Dr. Smith?"];
                            };
                        };
                        readonly required: readonly ["id", "conversationId", "attachments", "author", "direction", "isInternalNote", "appURL", "apiURL", "text", "pages", "buttons", "modifiedAt", "createdAt", "object", "requestId", "canDelete"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly hasMore: {
                    readonly type: "boolean";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                };
                readonly totalCount: {
                    readonly format: "int32";
                    readonly type: "integer";
                    readonly description: "Total count represents the total number of conversation items available. This is a best effort calculation at the time of the initial query. This count will not be recalculated more than once every 60 seconds while iterating a set of results.";
                    readonly examples: readonly [750];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
            };
            readonly required: readonly ["totalCount", "conversationItems", "hasMore"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ConversationTags: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly pageSize: {
                    readonly format: "int32";
                    readonly maximum: 500;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "How many tags to return at one time";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly hasMore: {
                    readonly type: "boolean";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                };
                readonly tags: {
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly description: "Spruce's conversation tag ID";
                                readonly type: "string";
                                readonly examples: readonly ["tag_0E5QDGJC03000"];
                            };
                            readonly object: {
                                readonly description: "String representing the object's type";
                                readonly type: "string";
                            };
                            readonly value: {
                                readonly description: "The text value of a conversation tag";
                                readonly type: "string";
                                readonly examples: readonly ["Smith"];
                            };
                        };
                        readonly required: readonly ["id", "value", "object"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly totalCount: {
                    readonly format: "int32";
                    readonly type: "integer";
                    readonly examples: readonly [750];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
            };
            readonly required: readonly ["totalCount", "tags", "hasMore"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateContact: {
    readonly body: {
        readonly description: "Contact json object. At least one name or piece of contact information is required";
        readonly properties: {
            readonly category: {
                readonly enum: readonly ["patient", "professional"];
                readonly type: "string";
                readonly examples: readonly ["patient"];
            };
            readonly companyName: {
                readonly description: "The contact's company. This field can also be used to specify the name of a non-patient contact, such as another healthcare facility.";
                readonly type: "string";
                readonly examples: readonly ["Walgreens"];
            };
            readonly dateOfBirth: {
                readonly description: "The contact's date of birth in the format YYYY-MM-DD.";
                readonly format: "date";
                readonly type: "string";
                readonly examples: readonly ["2000-01-30"];
            };
            readonly emailAddresses: {
                readonly items: {
                    readonly properties: {
                        readonly label: {
                            readonly description: "A label for the email address such as 'Work', 'Home', etc.";
                            readonly type: "string";
                            readonly examples: readonly ["Work"];
                        };
                        readonly value: {
                            readonly format: "email";
                            readonly type: "string";
                            readonly examples: readonly ["contact@example.com"];
                        };
                    };
                    readonly required: readonly ["value"];
                    readonly type: "object";
                };
                readonly type: "array";
            };
            readonly familyName: {
                readonly description: "The contact's family name (typically last name in US)";
                readonly type: "string";
                readonly examples: readonly ["Smith"];
            };
            readonly faxNumbers: {
                readonly items: {
                    readonly properties: {
                        readonly label: {
                            readonly description: "A label for the phone number such as 'Work', 'Home', 'Cell', etc.";
                            readonly type: "string";
                            readonly examples: readonly ["Work"];
                        };
                        readonly value: {
                            readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                            readonly format: "string";
                            readonly type: "string";
                            readonly examples: readonly [12225550000];
                        };
                    };
                    readonly required: readonly ["value"];
                    readonly type: "object";
                };
                readonly type: "array";
            };
            readonly gender: {
                readonly enum: readonly ["unknown", "male", "female", "other"];
                readonly type: "string";
                readonly examples: readonly ["unknown"];
            };
            readonly genderDetail: {
                readonly description: "Optional free-text details for gender";
                readonly type: "string";
                readonly examples: readonly ["Non-binary"];
            };
            readonly givenName: {
                readonly description: "The contact's given name (typically first name in US)";
                readonly type: "string";
                readonly examples: readonly ["Joe"];
            };
            readonly internalMemberIds: {
                readonly description: "The ids of the teammates, teams and/or your organization that are members of the contact. Contact Membership must be enabled for the organization for this field to be interacted with.";
                readonly items: {
                    readonly type: "string";
                };
                readonly type: "array";
            };
            readonly middleName: {
                readonly description: "The contact's middle name";
                readonly type: "string";
                readonly examples: readonly ["William"];
            };
            readonly organizationContactFields: {
                readonly description: "Fields on a contact that are custom to your organization";
                readonly items: {
                    readonly properties: {
                        readonly id: {
                            readonly description: "Spruce's contact organization contact custom field ID";
                            readonly type: "string";
                            readonly examples: readonly ["managedCustomField_0E5QDGJC03000"];
                        };
                        readonly value: {
                            readonly description: "The value of the field";
                            readonly type: "string";
                            readonly examples: readonly ["CVS"];
                        };
                    };
                    readonly required: readonly ["id", "value"];
                    readonly type: "object";
                };
                readonly type: "array";
            };
            readonly phoneNumbers: {
                readonly items: {
                    readonly properties: {
                        readonly label: {
                            readonly description: "A label for the phone number such as 'Work', 'Home', 'Cell', etc.";
                            readonly type: "string";
                            readonly examples: readonly ["Work"];
                        };
                        readonly value: {
                            readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                            readonly format: "string";
                            readonly type: "string";
                            readonly examples: readonly [12225550000];
                        };
                    };
                    readonly required: readonly ["value"];
                    readonly type: "object";
                };
                readonly type: "array";
            };
            readonly pronouns: {
                readonly description: "The contact's pronouns";
                readonly type: "string";
                readonly examples: readonly ["he/him"];
            };
            readonly tagIds: {
                readonly description: "An array of Spruce contact tag ids";
                readonly items: {
                    readonly description: "Spruce's contact tag ID";
                    readonly type: "string";
                    readonly examples: readonly ["tag_0E5QDGJC03000"];
                };
                readonly type: "array";
            };
        };
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "s-idempotency-key": {
                    readonly type: "string";
                    readonly examples: readonly ["S7uiKYMMRzAcuG8S"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique value generated by the client used to recognize subsequent retries of the same request. Idempotency keys can be up to 255 characters long.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly apiURL: {
                    readonly description: "An absolute URL for fetching this contact from the API";
                    readonly format: "url";
                    readonly type: "string";
                    readonly examples: readonly ["https://api.sprucehealth.com/contact/entity_0E5QDGJC03000"];
                };
                readonly appURL: {
                    readonly description: "An absolute URL to view the contact in the Spruce app";
                    readonly format: "url";
                    readonly type: "string";
                    readonly examples: readonly ["https://app.sprucehealth.com/org/entity_0D4QABCC06000/contact/entity_0E5QDGJC03000"];
                };
                readonly canDelete: {
                    readonly description: "Whether the contact may be deleted.";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly canEdit: {
                    readonly description: "Whether the contact may be edited.";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly category: {
                    readonly enum: readonly ["patient", "professional", "clinic", "unknown"];
                    readonly type: "string";
                    readonly examples: readonly ["patient"];
                    readonly description: "`patient` `professional` `clinic` `unknown`";
                };
                readonly companyName: {
                    readonly description: "The contact's company. This field can also be used to specify the name of a non-patient contact, such as another healthcare facility.";
                    readonly type: "string";
                    readonly examples: readonly ["Walgreens"];
                };
                readonly created: {
                    readonly description: "The date this contact was added to Spruce";
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2021-01-30T08:30:00Z"];
                };
                readonly customContactFields: {
                    readonly description: "Fields on a contact that are custom";
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly description: "Spruce's contact contact custom field ID";
                                readonly type: "string";
                                readonly examples: readonly ["entityCustomField_0E5QDGJC03000"];
                            };
                            readonly name: {
                                readonly description: "A name for the field";
                                readonly type: "string";
                                readonly examples: readonly ["Preferred Pharmacy"];
                            };
                            readonly value: {
                                readonly description: "The value of the field";
                                readonly type: "string";
                                readonly examples: readonly ["CVS"];
                            };
                        };
                        readonly required: readonly ["id", "name", "value"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly dateOfBirth: {
                    readonly description: "The contact's date of birth in the format YYYY-MM-DD.";
                    readonly format: "date";
                    readonly type: "string";
                    readonly examples: readonly ["2000-01-30"];
                };
                readonly displayName: {
                    readonly description: "The contact's full name for easy display to a user. This is determined by combining the givenName, middleName, and familyName, or if those are all empty, falling back to companyName, phone number or email address.";
                    readonly type: "string";
                    readonly examples: readonly ["Joe William Smith"];
                };
                readonly emailAddresses: {
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly description: "Spruce's phone number ID";
                                readonly format: "string";
                                readonly type: "string";
                                readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                            };
                            readonly label: {
                                readonly description: "A label for the email address such as 'Work', 'Home', etc.";
                                readonly type: "string";
                                readonly examples: readonly ["Work"];
                            };
                            readonly value: {
                                readonly format: "email";
                                readonly type: "string";
                                readonly examples: readonly ["contact@example.com"];
                            };
                        };
                        readonly required: readonly ["id", "value"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly familyName: {
                    readonly description: "The contact's family name (typically last name in US)";
                    readonly type: "string";
                    readonly examples: readonly ["Smith"];
                };
                readonly faxNumbers: {
                    readonly items: {
                        readonly properties: {
                            readonly displayValue: {
                                readonly description: "The contact phone number in an easily readable format.";
                                readonly type: "string";
                                readonly examples: readonly ["(222) 555-0000"];
                            };
                            readonly id: {
                                readonly description: "Spruce's phone number ID";
                                readonly format: "string";
                                readonly type: "string";
                                readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                            };
                            readonly label: {
                                readonly description: "A label for the phone number such as 'Work', 'Home', 'Cell', etc.";
                                readonly type: "string";
                                readonly examples: readonly ["Work"];
                            };
                            readonly value: {
                                readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                                readonly format: "string";
                                readonly type: "string";
                                readonly examples: readonly [12225550000];
                            };
                        };
                        readonly required: readonly ["id", "value", "displayValue"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly gender: {
                    readonly enum: readonly ["unknown", "male", "female", "other"];
                    readonly type: "string";
                    readonly examples: readonly ["unknown"];
                    readonly description: "`unknown` `male` `female` `other`";
                };
                readonly genderDetail: {
                    readonly description: "Optional free-text details for gender";
                    readonly type: "string";
                    readonly examples: readonly ["Non-binary"];
                };
                readonly givenName: {
                    readonly description: "The contact's given name (typically first name in US)";
                    readonly type: "string";
                    readonly examples: readonly ["Joe"];
                };
                readonly hasAccount: {
                    readonly description: "Whether the contact has created a Spruce account for secure messaging, video calling, etc.";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly hasPendingInvite: {
                    readonly description: "Whether the contact has a pending Spruce account invitation";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly id: {
                    readonly description: "Spruce's contact ID";
                    readonly type: "string";
                    readonly examples: readonly ["entity_0E5QDGJC03000"];
                };
                readonly integrationLinks: {
                    readonly description: "Links between a contact and an integrated external system.";
                    readonly items: {
                        readonly properties: {
                            readonly contactId: {
                                readonly description: "Spruce's contact ID";
                                readonly type: "string";
                                readonly examples: readonly ["entity_0E5QDGJC03000"];
                            };
                            readonly externalId: {
                                readonly description: "The id of a contact in an external system.";
                                readonly type: "string";
                                readonly examples: readonly ["elation_140797386655555"];
                            };
                            readonly type: {
                                readonly enum: readonly ["elation", "hint", "athena", "custom"];
                                readonly type: "string";
                                readonly examples: readonly ["elation"];
                                readonly description: "`elation` `hint` `athena` `custom`";
                            };
                            readonly url: {
                                readonly description: "The url of a contact in an integrated external system.";
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["type", "externalId", "contactId"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly internalMemberIds: {
                    readonly description: "The ids of the teammates, teams and/or your organization that are members of the contact. Contact Membership must be enabled for the organization for this field to be interacted with.";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly type: "array";
                };
                readonly middleName: {
                    readonly description: "The contact's middle name";
                    readonly type: "string";
                    readonly examples: readonly ["William"];
                };
                readonly object: {
                    readonly description: "String representing the object's type";
                    readonly type: "string";
                };
                readonly organizationContactFields: {
                    readonly description: "Fields on a contact that are custom";
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly description: "Spruce's contact organization contact custom field ID";
                                readonly type: "string";
                                readonly examples: readonly ["managedCustomField_0E5QDGJC03000"];
                            };
                            readonly name: {
                                readonly description: "A name for the field";
                                readonly type: "string";
                                readonly examples: readonly ["Preferred Pharmacy"];
                            };
                            readonly value: {
                                readonly description: "The value of the field";
                                readonly type: "string";
                                readonly examples: readonly ["CVS"];
                            };
                        };
                        readonly required: readonly ["id", "name", "value"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly phoneNumbers: {
                    readonly items: {
                        readonly properties: {
                            readonly displayValue: {
                                readonly description: "The contact phone number in an easily readable format.";
                                readonly type: "string";
                                readonly examples: readonly ["(222) 555-0000"];
                            };
                            readonly id: {
                                readonly description: "Spruce's phone number ID";
                                readonly format: "string";
                                readonly type: "string";
                                readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                            };
                            readonly label: {
                                readonly description: "A label for the phone number such as 'Work', 'Home', 'Cell', etc.";
                                readonly type: "string";
                                readonly examples: readonly ["Work"];
                            };
                            readonly value: {
                                readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                                readonly format: "string";
                                readonly type: "string";
                                readonly examples: readonly [12225550000];
                            };
                        };
                        readonly required: readonly ["id", "value", "displayValue"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly pronouns: {
                    readonly description: "The contact's pronouns";
                    readonly type: "string";
                    readonly examples: readonly ["he/him"];
                };
                readonly tags: {
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly description: "Spruce's contact tag ID";
                                readonly type: "string";
                                readonly examples: readonly ["tag_0E5QDGJC03000"];
                            };
                            readonly object: {
                                readonly description: "String representing the object's type";
                                readonly type: "string";
                            };
                            readonly value: {
                                readonly description: "The text value of a contact tag";
                                readonly type: "string";
                                readonly examples: readonly ["Smith"];
                            };
                        };
                        readonly required: readonly ["id", "value", "object"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
            };
            readonly required: readonly ["id", "displayName", "tags", "gender", "category", "created", "phoneNumbers", "emailAddresses", "customFields", "appURL", "apiURL", "hasAccount", "hasPendingInvite", "customContactFields", "organizationContactFields", "canDelete", "canEdit", "integrationLinks", "object", "internalMemberIds"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateContactField: {
    readonly body: {
        readonly properties: {
            readonly name: {
                readonly description: "A name for the field";
                readonly type: "string";
                readonly examples: readonly ["Preferred Pharmacy"];
            };
        };
        readonly required: readonly ["name"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "s-idempotency-key": {
                    readonly type: "string";
                    readonly examples: readonly ["S7uiKYMMRzAcuG8S"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique value generated by the client used to recognize subsequent retries of the same request. Idempotency keys can be up to 255 characters long.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly id: {
                    readonly description: "Spruce's contact organization contact custom field ID";
                    readonly type: "string";
                    readonly examples: readonly ["managedCustomField_0E5QDGJC03000"];
                };
                readonly name: {
                    readonly description: "A name for the field";
                    readonly type: "string";
                    readonly examples: readonly ["Preferred Pharmacy"];
                };
            };
            readonly required: readonly ["id", "name"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateContactIntegrationLink: {
    readonly body: {
        readonly properties: {
            readonly externalId: {
                readonly description: "The id of the contact in the external integrated system.";
                readonly type: "string";
                readonly examples: readonly ["elation_140797386655555"];
            };
            readonly type: {
                readonly enum: readonly ["elation", "hint", "athena", "custom"];
                readonly type: "string";
                readonly description: "The integration type of the integration link.";
                readonly examples: readonly ["elation"];
            };
            readonly url: {
                readonly description: "The URL to the contact in the external system (only for custom integration links).";
                readonly type: "string";
                readonly examples: readonly ["https://example.com/contacts/123"];
            };
        };
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contactId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the contact for which the integration link should be created.";
                };
            };
            readonly required: readonly ["contactId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly enum: readonly ["elation", "hint", "athena", "custom"];
                    readonly type: "string";
                    readonly examples: readonly ["elation"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The integration type of the existing integration link.";
                };
                readonly externalId: {
                    readonly description: "The id of the contact in the external integrated system.";
                    readonly type: "string";
                    readonly examples: readonly ["elation_140797386655555"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "s-idempotency-key": {
                    readonly type: "string";
                    readonly examples: readonly ["S7uiKYMMRzAcuG8S"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique value generated by the client used to recognize subsequent retries of the same request. Idempotency keys can be up to 255 characters long.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly integrationLinks: {
                    readonly description: "Links between a contact and an integrated external system.";
                    readonly items: {
                        readonly properties: {
                            readonly contactId: {
                                readonly description: "Spruce's contact ID";
                                readonly type: "string";
                                readonly examples: readonly ["entity_0E5QDGJC03000"];
                            };
                            readonly externalId: {
                                readonly description: "The id of a contact in an external system.";
                                readonly type: "string";
                                readonly examples: readonly ["elation_140797386655555"];
                            };
                            readonly type: {
                                readonly enum: readonly ["elation", "hint", "athena", "custom"];
                                readonly type: "string";
                                readonly examples: readonly ["elation"];
                                readonly description: "`elation` `hint` `athena` `custom`";
                            };
                            readonly url: {
                                readonly description: "The url of a contact in an integrated external system.";
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["type", "externalId", "contactId"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
            };
            readonly required: readonly ["integrationLinks"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateContactTag: {
    readonly body: {
        readonly properties: {
            readonly value: {
                readonly description: "The text value of a contact tag";
                readonly type: "string";
                readonly examples: readonly ["Smith"];
            };
        };
        readonly required: readonly ["value"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "s-idempotency-key": {
                    readonly type: "string";
                    readonly examples: readonly ["S7uiKYMMRzAcuG8S"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique value generated by the client used to recognize subsequent retries of the same request. Idempotency keys can be up to 255 characters long.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly id: {
                    readonly description: "Spruce's contact tag ID";
                    readonly type: "string";
                    readonly examples: readonly ["tag_0E5QDGJC03000"];
                };
                readonly object: {
                    readonly description: "String representing the object's type";
                    readonly type: "string";
                };
                readonly value: {
                    readonly description: "The text value of a contact tag";
                    readonly type: "string";
                    readonly examples: readonly ["Smith"];
                };
            };
            readonly required: readonly ["id", "value", "object"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateConversation: {
    readonly body: {
        readonly description: "Conversation json object. The internal secure endpoint and destinations are required.";
        readonly properties: {
            readonly secure: {
                readonly properties: {
                    readonly destinationContactIds: {
                        readonly description: "The ids of the destination contacts.";
                        readonly items: {
                            readonly type: "string";
                        };
                        readonly type: "array";
                        readonly examples: readonly ["entity_0D4QABCC06000"];
                    };
                    readonly internalEndpointId: {
                        readonly description: "Organization's internal endpoint ID that will be used as the internal endpoint for the conversation.";
                        readonly type: "string";
                        readonly examples: readonly ["organizationCode_2ER39ETHBQ800"];
                    };
                    readonly message: {
                        readonly properties: {
                            readonly attachments: {
                                readonly items: {
                                    readonly properties: {
                                        readonly attachmentId: {
                                            readonly description: "The id of the attachment. In most cases, this will be a media id returned from posting a file to the [media endpoint](/reference/uploadmedia).";
                                            readonly type: "string";
                                            readonly examples: readonly ["d7b25969-86ec-7e37-3776-3577-c0637a0c"];
                                        };
                                        readonly title: {
                                            readonly description: "The title of the attachment";
                                            readonly type: "string";
                                            readonly examples: readonly ["My Image"];
                                        };
                                    };
                                    readonly required: readonly ["attachmentId", "title"];
                                    readonly type: "object";
                                };
                                readonly maxItems: 5;
                                readonly type: "array";
                            };
                            readonly author: {
                                readonly description: "The ID of the organization member (teammate, team, or organization) to send the message as. If not provided, defaults to the organization.";
                                readonly type: "string";
                                readonly examples: readonly ["entity_0D4QABCC06000"];
                            };
                            readonly body: {
                                readonly items: {
                                    readonly description: "An element of a message body. This can be either a `text` or `page` type element. A `text` element is a string of text to be placed in the message. A `page` element is a reference to an organization member. For a `page` element, the value field should be the Spruce id of the organization member being referenced.";
                                    readonly properties: {
                                        readonly type: {
                                            readonly enum: readonly ["text", "page"];
                                            readonly type: "string";
                                            readonly examples: readonly ["text"];
                                        };
                                        readonly value: {
                                            readonly description: "The value of the message body element";
                                            readonly type: "string";
                                            readonly examples: readonly ["Hello, how are you?"];
                                        };
                                    };
                                    readonly required: readonly ["type", "value"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly internal: {
                                readonly description: "Whether the message is internal or not";
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                            readonly stayArchived: {
                                readonly description: "Whether the conversation should stay archived (if it is already archived) after the message is sent";
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                        };
                        readonly required: readonly ["body"];
                        readonly type: "object";
                    };
                    readonly subject: {
                        readonly description: "The conversation's subject.";
                        readonly type: "string";
                        readonly examples: readonly ["Annual Physical Exam"];
                    };
                };
                readonly required: readonly ["destinationContactIds", "internalEndpointId"];
                readonly type: "object";
            };
            readonly type: {
                readonly description: "The type of conversation to create.";
                readonly enum: readonly ["secure"];
                readonly type: "string";
                readonly examples: readonly ["secure"];
            };
        };
        readonly required: readonly ["type"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "s-idempotency-key": {
                    readonly type: "string";
                    readonly examples: readonly ["S7uiKYMMRzAcuG8S"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique value generated by the client used to recognize subsequent retries of the same request. Idempotency keys can be up to 255 characters long.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly conversation: {
                    readonly properties: {
                        readonly apiURL: {
                            readonly description: "An absolute URL for fetching this conversation from the API";
                            readonly format: "url";
                            readonly type: "string";
                            readonly examples: readonly ["https://api.sprucehealth.com/conversations/t_0E5QDJJC03000"];
                        };
                        readonly appURL: {
                            readonly description: "An absolute URL to view the conversation in the Spruce app";
                            readonly format: "url";
                            readonly type: "string";
                            readonly examples: readonly ["https://app.sprucehealth.com/org/entity_0D4QABCC06000/thread/t_0E5QDJJC03000"];
                        };
                        readonly archived: {
                            readonly description: "Whether or not the conversation is archived";
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly assignedToMemberId: {
                            readonly description: "The id of the teammate the conversation is assigned to";
                            readonly type: "string";
                            readonly examples: readonly ["entity_0D4QABCC06000"];
                        };
                        readonly associatedContactIds: {
                            readonly description: "The ids of the contacts associated with the conversation. This may include contacts that are not a part of the conversation. For example, the conversation may be with parents, but associated with a contact representing their child.";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly type: "array";
                            readonly examples: readonly ["entity_0D4QABCC06000"];
                        };
                        readonly createdAt: {
                            readonly description: "The date the conversation was created";
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly examples: readonly ["2020-04-01T00:00:00Z"];
                        };
                        readonly externalParticipants: {
                            readonly description: "The external participants in the conversation.";
                            readonly items: {
                                readonly properties: {
                                    readonly contact: {
                                        readonly description: "The id of the contact associated with the participant. This will be omitted if the participant is not a saved contact.";
                                        readonly type: "string";
                                        readonly examples: readonly ["entity_0D4QABCC06000"];
                                    };
                                    readonly displayName: {
                                        readonly description: "The display name of the participant";
                                        readonly type: "string";
                                        readonly examples: readonly ["555-555-5555", "John Doe", "patient@example.com"];
                                    };
                                    readonly endpoint: {
                                        readonly description: "The endpoint of the participant, such as their phone number or email address. For secure conversations, there will not be an endpoint.";
                                        readonly properties: {
                                            readonly channel: {
                                                readonly description: "The channel of the endpoint (e.g. 'email', 'phone', 'fax', etc.). More endpoint channels may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `fax` `secure`";
                                                readonly enum: readonly ["email", "phone", "fax", "secure"];
                                                readonly type: "string";
                                            };
                                            readonly displayValue: {
                                                readonly description: "The display value of the endpoint. This is the value that should be displayed to the user when showing the endpoint, along with the label if it's populated.";
                                                readonly type: "string";
                                            };
                                            readonly id: {
                                                readonly description: "The id of the endpoint";
                                                readonly type: "string";
                                                readonly examples: readonly [15555555555];
                                            };
                                            readonly isInternal: {
                                                readonly description: "Internal endpoints are endpoints that are owned by your organization, such as your organization's Spruce Phone Numbers or Spruce Links.";
                                                readonly type: "boolean";
                                                readonly examples: readonly [false];
                                            };
                                            readonly label: {
                                                readonly description: "The optional label of the endpoint";
                                                readonly type: "string";
                                                readonly examples: readonly ["Home", "Work"];
                                            };
                                            readonly object: {
                                                readonly description: "String representing the object's type";
                                                readonly type: "string";
                                            };
                                            readonly rawValue: {
                                                readonly description: "The raw value of the endpoint. This can be used for programmatically comparing contact values. The raw value for a phone/fax number will be in E164 format.";
                                                readonly type: "string";
                                            };
                                        };
                                        readonly required: readonly ["id", "channel", "displayValue", "rawValue", "isInternal", "object"];
                                        readonly type: "object";
                                    };
                                };
                                readonly required: readonly ["displayName"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                        readonly id: {
                            readonly description: "Spruce's conversation ID";
                            readonly type: "string";
                            readonly examples: readonly ["t_0E5QDGJC03000"];
                        };
                        readonly internalEndpoint: {
                            readonly description: "The internal endpoint of the conversation. For secure conversations, this will be a Spruce Link.";
                            readonly properties: {
                                readonly channel: {
                                    readonly description: "The channel of the endpoint (e.g. 'email', 'phone', 'fax', etc.). More endpoint channels may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `fax` `secure`";
                                    readonly enum: readonly ["email", "phone", "fax", "secure"];
                                    readonly type: "string";
                                };
                                readonly displayValue: {
                                    readonly description: "The display value of the endpoint. This is the value that should be displayed to the user when showing the endpoint, along with the label if it's populated.";
                                    readonly type: "string";
                                };
                                readonly id: {
                                    readonly description: "The id of the endpoint";
                                    readonly type: "string";
                                    readonly examples: readonly [15555555555];
                                };
                                readonly isInternal: {
                                    readonly description: "Internal endpoints are endpoints that are owned by your organization, such as your organization's Spruce Phone Numbers or Spruce Links.";
                                    readonly type: "boolean";
                                    readonly examples: readonly [false];
                                };
                                readonly label: {
                                    readonly description: "The optional label of the endpoint";
                                    readonly type: "string";
                                    readonly examples: readonly ["Home", "Work"];
                                };
                                readonly object: {
                                    readonly description: "String representing the object's type";
                                    readonly type: "string";
                                };
                                readonly rawValue: {
                                    readonly description: "The raw value of the endpoint. This can be used for programmatically comparing contact values. The raw value for a phone/fax number will be in E164 format.";
                                    readonly type: "string";
                                };
                            };
                            readonly required: readonly ["id", "channel", "displayValue", "rawValue", "isInternal", "object"];
                            readonly type: "object";
                        };
                        readonly internalMemberIds: {
                            readonly description: "The ids of the teammates, teams and/or your organization that are members of the conversation.";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly type: "array";
                            readonly examples: readonly ["entity_0D4QABCC06000"];
                        };
                        readonly isReadOnly: {
                            readonly description: "If the conversation is read-only, messages cannot be sent to it.";
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly lastMessageAt: {
                            readonly description: "The time of the conversations latest message";
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly examples: readonly ["2020-04-01T00:00:00Z"];
                        };
                        readonly object: {
                            readonly description: "String representing the object's type";
                            readonly type: "string";
                        };
                        readonly subtitle: {
                            readonly description: "The subtitle of the conversation";
                            readonly type: "string";
                            readonly examples: readonly ["Billing"];
                        };
                        readonly tags: {
                            readonly items: {
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "Spruce's conversation tag ID";
                                        readonly type: "string";
                                        readonly examples: readonly ["tag_0E5QDGJC03000"];
                                    };
                                    readonly object: {
                                        readonly description: "String representing the object's type";
                                        readonly type: "string";
                                    };
                                    readonly value: {
                                        readonly description: "The text value of a conversation tag";
                                        readonly type: "string";
                                        readonly examples: readonly ["Smith"];
                                    };
                                };
                                readonly required: readonly ["id", "value", "object"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                        readonly title: {
                            readonly description: "The title of the conversation";
                            readonly type: "string";
                            readonly examples: readonly ["John Doe"];
                        };
                        readonly type: {
                            readonly description: "The type of the conversation (e.g. 'email', 'phone', 'secure', etc.). Note that SMS will be in a 'phone' conversation, and video calls will be in a 'secure' conversation. More conversation types may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `secure` `fax` `team` `note` `other`";
                            readonly enum: readonly ["email", "phone", "secure", "fax", "team", "note", "other"];
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["appURL", "apiURL", "archived", "createdAt", "id", "isReadOnly", "tags", "type", "title", "object"];
                    readonly type: "object";
                };
                readonly postMessageRequestId: {
                    readonly description: "The id of an asynchronous request";
                    readonly type: "string";
                    readonly examples: readonly ["asyncRequest_0D4QABCC06000"];
                };
            };
            readonly required: readonly ["conversation"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateConversationTag: {
    readonly body: {
        readonly properties: {
            readonly value: {
                readonly description: "The text value of a conversation tag";
                readonly type: "string";
                readonly examples: readonly ["Smith"];
            };
        };
        readonly required: readonly ["value"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "s-idempotency-key": {
                    readonly type: "string";
                    readonly examples: readonly ["S7uiKYMMRzAcuG8S"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique value generated by the client used to recognize subsequent retries of the same request. Idempotency keys can be up to 255 characters long.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly id: {
                    readonly description: "Spruce's conversation tag ID";
                    readonly type: "string";
                    readonly examples: readonly ["tag_0E5QDGJC03000"];
                };
                readonly object: {
                    readonly description: "String representing the object's type";
                    readonly type: "string";
                };
                readonly value: {
                    readonly description: "The text value of a conversation tag";
                    readonly type: "string";
                    readonly examples: readonly ["Smith"];
                };
            };
            readonly required: readonly ["id", "value", "object"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateWebhookEndpoint: {
    readonly body: {
        readonly properties: {
            readonly name: {
                readonly description: "The name of the webhook destination endpoint";
                readonly type: "string";
                readonly examples: readonly ["My Webhook Endpoint"];
            };
            readonly url: {
                readonly description: "The URL of the webhook destination endpoint";
                readonly format: "url";
                readonly type: "string";
                readonly examples: readonly ["https://example.com/webhook"];
            };
        };
        readonly required: readonly ["name", "url"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "s-idempotency-key": {
                    readonly type: "string";
                    readonly examples: readonly ["S7uiKYMMRzAcuG8S"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique value generated by the client used to recognize subsequent retries of the same request. Idempotency keys can be up to 255 characters long.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly endpoint: {
                    readonly properties: {
                        readonly createdAt: {
                            readonly description: "The date the destination endpoint was created";
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly examples: readonly ["2020-04-01T00:00:00Z"];
                        };
                        readonly id: {
                            readonly description: "The id of a webhook destination endpoint";
                            readonly type: "string";
                            readonly examples: readonly ["wde_01HWDG5ADNBGJ3XXXXXFP8P1GH"];
                        };
                        readonly name: {
                            readonly description: "The name of the webhook destination endpoint";
                            readonly type: "string";
                            readonly examples: readonly ["My Webhook Endpoint"];
                        };
                        readonly object: {
                            readonly description: "String representing the object's type";
                            readonly type: "string";
                        };
                        readonly signingSecrets: {
                            readonly items: {
                                readonly description: "The signing secret for the webhook endpoint. This is used to verify the authenticity of the webhook payload. This value is only populated when the webhook endpoint is created.";
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "The ID of the signing secret";
                                        readonly type: "string";
                                        readonly examples: readonly ["wss_01HWDG5ADNBGXXXXXY07DP8"];
                                    };
                                    readonly value: {
                                        readonly description: "The signing secret";
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["id", "value"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                        readonly status: {
                            readonly description: "The status of the webhook destination endpoint";
                            readonly type: "string";
                        };
                        readonly url: {
                            readonly description: "The URL of the webhook destination endpoint";
                            readonly format: "url";
                            readonly type: "string";
                            readonly examples: readonly ["https://example.com/webhook"];
                        };
                    };
                    readonly required: readonly ["createdAt", "id", "signingSecrets", "status", "url", "object"];
                    readonly type: "object";
                };
            };
            readonly required: readonly ["endpoint"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteContact: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contactId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the contact to delete";
                };
            };
            readonly required: readonly ["contactId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly "s-ratelimit-limit": {
                    readonly type: "integer";
                    readonly description: "Request limit per minute";
                };
                readonly "s-ratelimit-remaining": {
                    readonly type: "integer";
                    readonly description: "Requests remaining this minute";
                };
                readonly "s-request-id": {
                    readonly type: "string";
                    readonly description: "The ID of the request";
                };
            };
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteContactIntegrationLink: {
    readonly body: {
        readonly properties: {
            readonly externalId: {
                readonly description: "The id of the contact in the external integrated system.";
                readonly type: "string";
                readonly examples: readonly ["elation_140797386655555"];
            };
            readonly type: {
                readonly enum: readonly ["elation", "hint", "athena", "custom"];
                readonly type: "string";
                readonly description: "The identifier of the integration type the existing integration link is for.";
                readonly examples: readonly ["elation"];
            };
        };
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contactId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the contact to delete the integration link for.";
                };
            };
            readonly required: readonly ["contactId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly enum: readonly ["elation", "hint", "athena", "custom"];
                    readonly type: "string";
                    readonly examples: readonly ["elation"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The identifier of the integration type the existing integration link is for.";
                };
                readonly externalId: {
                    readonly description: "The id of the contact in the external integrated system.";
                    readonly type: "string";
                    readonly examples: readonly ["elation_140797386655555"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly "s-ratelimit-limit": {
                    readonly type: "integer";
                    readonly description: "Request limit per minute";
                };
                readonly "s-ratelimit-remaining": {
                    readonly type: "integer";
                    readonly description: "Requests remaining this minute";
                };
                readonly "s-request-id": {
                    readonly type: "string";
                    readonly description: "The ID of the request";
                };
            };
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteConversationItem: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly conversationItemId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the conversation item to delete";
                };
            };
            readonly required: readonly ["conversationItemId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly requestId: {
                    readonly description: "The id of an asynchronous request";
                    readonly type: "string";
                    readonly examples: readonly ["asyncRequest_0D4QABCC06000"];
                };
            };
            readonly required: readonly ["requestId"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteScheduledMessage: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly scheduledMessageId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the scheduled message to delete";
                };
            };
            readonly required: readonly ["scheduledMessageId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly "s-ratelimit-limit": {
                    readonly type: "integer";
                    readonly description: "Request limit per minute";
                };
                readonly "s-ratelimit-remaining": {
                    readonly type: "integer";
                    readonly description: "Requests remaining this minute";
                };
                readonly "s-request-id": {
                    readonly type: "string";
                    readonly description: "The ID of the request";
                };
            };
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteWebhookEndpoint: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly endpointId: {
                    readonly description: "The id of the webhook destination endpoint to delete.";
                    readonly type: "string";
                    readonly examples: readonly ["wde_01HWDG5ADNBGJ3XXXXXFP8P1GH"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["endpointId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly "s-ratelimit-limit": {
                    readonly type: "integer";
                    readonly description: "Request limit per minute";
                };
                readonly "s-ratelimit-remaining": {
                    readonly type: "integer";
                    readonly description: "Requests remaining this minute";
                };
                readonly "s-request-id": {
                    readonly type: "string";
                    readonly description: "The ID of the request";
                };
            };
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const InternalEndpoints: {
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly internalEndpoints: {
                    readonly items: {
                        readonly properties: {
                            readonly additionalMembers: {
                                readonly items: {
                                    readonly anyOf: readonly [{
                                        readonly properties: {
                                            readonly displayName: {
                                                readonly description: "The full name of the teammate, including any title provided";
                                                readonly type: "string";
                                                readonly examples: readonly ["John Doe, MD"];
                                            };
                                            readonly email: {
                                                readonly description: "The email address of the teammate";
                                                readonly format: "email";
                                                readonly type: "string";
                                                readonly examples: readonly ["provider@example.com"];
                                            };
                                            readonly id: {
                                                readonly description: "The id of the teammate";
                                                readonly type: "string";
                                                readonly examples: readonly ["entity_0E5QDGJC03000"];
                                            };
                                            readonly isAdmin: {
                                                readonly description: "Whether or not the teammate is an admin on Spruce";
                                                readonly type: "boolean";
                                                readonly examples: readonly [false];
                                            };
                                            readonly object: {
                                                readonly description: "String representing the object's type";
                                                readonly type: "string";
                                            };
                                            readonly type: {
                                                readonly description: "This will always be 'teammate'. This is provided for cases where a teammate may be in a mixed list with teams and/or your organization.";
                                                readonly type: "string";
                                                readonly examples: readonly ["teammate"];
                                            };
                                        };
                                        readonly required: readonly ["id", "displayName", "isAdmin", "type", "object"];
                                        readonly type: "object";
                                    }, {
                                        readonly properties: {
                                            readonly id: {
                                                readonly description: "The id of the team";
                                                readonly type: "string";
                                                readonly examples: readonly ["entity_0D4QABCC06000"];
                                            };
                                            readonly name: {
                                                readonly description: "The name of the team";
                                                readonly type: "string";
                                                readonly examples: readonly ["Billing Team"];
                                            };
                                            readonly object: {
                                                readonly description: "String representing the object's type";
                                                readonly type: "string";
                                            };
                                            readonly type: {
                                                readonly description: "This will always be 'team'. This is provided for cases where a team may be in a mixed list with teammtes and/or your organization.";
                                                readonly type: "string";
                                                readonly examples: readonly ["team"];
                                            };
                                        };
                                        readonly required: readonly ["id", "name", "type", "object"];
                                        readonly type: "object";
                                    }, {
                                        readonly properties: {
                                            readonly id: {
                                                readonly description: "The id of the organization";
                                                readonly type: "string";
                                                readonly examples: readonly ["entity_0D4QABCC06000"];
                                            };
                                            readonly name: {
                                                readonly description: "The name of the organization";
                                                readonly type: "string";
                                                readonly examples: readonly ["Spruce Health"];
                                            };
                                            readonly object: {
                                                readonly description: "String representing the object's type";
                                                readonly type: "string";
                                            };
                                            readonly type: {
                                                readonly description: "This will always be 'organization'. This is provided for cases where a organization may be in a mixed list with teammtes and/or teams.";
                                                readonly type: "string";
                                                readonly examples: readonly ["organization"];
                                            };
                                        };
                                        readonly required: readonly ["id", "name", "type", "object"];
                                        readonly type: "object";
                                    }];
                                };
                                readonly type: "array";
                            };
                            readonly endpoint: {
                                readonly properties: {
                                    readonly channel: {
                                        readonly description: "The channel of the endpoint (e.g. 'email', 'phone', 'fax', etc.). More endpoint channels may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `fax` `secure`";
                                        readonly enum: readonly ["email", "phone", "fax", "secure"];
                                        readonly type: "string";
                                    };
                                    readonly displayValue: {
                                        readonly description: "The display value of the endpoint. This is the value that should be displayed to the user when showing the endpoint, along with the label if it's populated.";
                                        readonly type: "string";
                                    };
                                    readonly id: {
                                        readonly description: "The id of the endpoint";
                                        readonly type: "string";
                                        readonly examples: readonly [15555555555];
                                    };
                                    readonly isInternal: {
                                        readonly description: "Internal endpoints are endpoints that are owned by your organization, such as your organization's Spruce Phone Numbers or Spruce Links.";
                                        readonly type: "boolean";
                                        readonly examples: readonly [false];
                                    };
                                    readonly label: {
                                        readonly description: "The optional label of the endpoint";
                                        readonly type: "string";
                                        readonly examples: readonly ["Home", "Work"];
                                    };
                                    readonly object: {
                                        readonly description: "String representing the object's type";
                                        readonly type: "string";
                                    };
                                    readonly rawValue: {
                                        readonly description: "The raw value of the endpoint. This can be used for programmatically comparing contact values. The raw value for a phone/fax number will be in E164 format.";
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["id", "channel", "displayValue", "rawValue", "isInternal", "object"];
                                readonly type: "object";
                            };
                            readonly object: {
                                readonly description: "String representing the object's type";
                                readonly type: "string";
                            };
                            readonly owner: {
                                readonly oneOf: readonly [{
                                    readonly properties: {
                                        readonly displayName: {
                                            readonly description: "The full name of the teammate, including any title provided";
                                            readonly type: "string";
                                            readonly examples: readonly ["John Doe, MD"];
                                        };
                                        readonly email: {
                                            readonly description: "The email address of the teammate";
                                            readonly format: "email";
                                            readonly type: "string";
                                            readonly examples: readonly ["provider@example.com"];
                                        };
                                        readonly id: {
                                            readonly description: "The id of the teammate";
                                            readonly type: "string";
                                            readonly examples: readonly ["entity_0E5QDGJC03000"];
                                        };
                                        readonly isAdmin: {
                                            readonly description: "Whether or not the teammate is an admin on Spruce";
                                            readonly type: "boolean";
                                            readonly examples: readonly [false];
                                        };
                                        readonly object: {
                                            readonly description: "String representing the object's type";
                                            readonly type: "string";
                                        };
                                        readonly type: {
                                            readonly description: "This will always be 'teammate'. This is provided for cases where a teammate may be in a mixed list with teams and/or your organization.";
                                            readonly type: "string";
                                            readonly examples: readonly ["teammate"];
                                        };
                                    };
                                    readonly required: readonly ["id", "displayName", "isAdmin", "type", "object"];
                                    readonly type: "object";
                                }, {
                                    readonly properties: {
                                        readonly id: {
                                            readonly description: "The id of the team";
                                            readonly type: "string";
                                            readonly examples: readonly ["entity_0D4QABCC06000"];
                                        };
                                        readonly name: {
                                            readonly description: "The name of the team";
                                            readonly type: "string";
                                            readonly examples: readonly ["Billing Team"];
                                        };
                                        readonly object: {
                                            readonly description: "String representing the object's type";
                                            readonly type: "string";
                                        };
                                        readonly type: {
                                            readonly description: "This will always be 'team'. This is provided for cases where a team may be in a mixed list with teammtes and/or your organization.";
                                            readonly type: "string";
                                            readonly examples: readonly ["team"];
                                        };
                                    };
                                    readonly required: readonly ["id", "name", "type", "object"];
                                    readonly type: "object";
                                }, {
                                    readonly properties: {
                                        readonly id: {
                                            readonly description: "The id of the organization";
                                            readonly type: "string";
                                            readonly examples: readonly ["entity_0D4QABCC06000"];
                                        };
                                        readonly name: {
                                            readonly description: "The name of the organization";
                                            readonly type: "string";
                                            readonly examples: readonly ["Spruce Health"];
                                        };
                                        readonly object: {
                                            readonly description: "String representing the object's type";
                                            readonly type: "string";
                                        };
                                        readonly type: {
                                            readonly description: "This will always be 'organization'. This is provided for cases where a organization may be in a mixed list with teammtes and/or teams.";
                                            readonly type: "string";
                                            readonly examples: readonly ["organization"];
                                        };
                                    };
                                    readonly required: readonly ["id", "name", "type", "object"];
                                    readonly type: "object";
                                }];
                            };
                        };
                        readonly required: readonly ["endpoint", "owner", "object"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
            };
            readonly required: readonly ["internalEndpoints"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListContacts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly pageSize: {
                    readonly format: "int32";
                    readonly maximum: 500;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "How many contacts to return at one time";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly contacts: {
                    readonly items: {
                        readonly properties: {
                            readonly apiURL: {
                                readonly description: "An absolute URL for fetching this contact from the API";
                                readonly format: "url";
                                readonly type: "string";
                                readonly examples: readonly ["https://api.sprucehealth.com/contact/entity_0E5QDGJC03000"];
                            };
                            readonly appURL: {
                                readonly description: "An absolute URL to view the contact in the Spruce app";
                                readonly format: "url";
                                readonly type: "string";
                                readonly examples: readonly ["https://app.sprucehealth.com/org/entity_0D4QABCC06000/contact/entity_0E5QDGJC03000"];
                            };
                            readonly canDelete: {
                                readonly description: "Whether the contact may be deleted.";
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly canEdit: {
                                readonly description: "Whether the contact may be edited.";
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly category: {
                                readonly enum: readonly ["patient", "professional", "clinic", "unknown"];
                                readonly type: "string";
                                readonly examples: readonly ["patient"];
                                readonly description: "`patient` `professional` `clinic` `unknown`";
                            };
                            readonly companyName: {
                                readonly description: "The contact's company. This field can also be used to specify the name of a non-patient contact, such as another healthcare facility.";
                                readonly type: "string";
                                readonly examples: readonly ["Walgreens"];
                            };
                            readonly created: {
                                readonly description: "The date this contact was added to Spruce";
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2021-01-30T08:30:00Z"];
                            };
                            readonly customContactFields: {
                                readonly description: "Fields on a contact that are custom";
                                readonly items: {
                                    readonly properties: {
                                        readonly id: {
                                            readonly description: "Spruce's contact contact custom field ID";
                                            readonly type: "string";
                                            readonly examples: readonly ["entityCustomField_0E5QDGJC03000"];
                                        };
                                        readonly name: {
                                            readonly description: "A name for the field";
                                            readonly type: "string";
                                            readonly examples: readonly ["Preferred Pharmacy"];
                                        };
                                        readonly value: {
                                            readonly description: "The value of the field";
                                            readonly type: "string";
                                            readonly examples: readonly ["CVS"];
                                        };
                                    };
                                    readonly required: readonly ["id", "name", "value"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly dateOfBirth: {
                                readonly description: "The contact's date of birth in the format YYYY-MM-DD.";
                                readonly format: "date";
                                readonly type: "string";
                                readonly examples: readonly ["2000-01-30"];
                            };
                            readonly displayName: {
                                readonly description: "The contact's full name for easy display to a user. This is determined by combining the givenName, middleName, and familyName, or if those are all empty, falling back to companyName, phone number or email address.";
                                readonly type: "string";
                                readonly examples: readonly ["Joe William Smith"];
                            };
                            readonly emailAddresses: {
                                readonly items: {
                                    readonly properties: {
                                        readonly id: {
                                            readonly description: "Spruce's phone number ID";
                                            readonly format: "string";
                                            readonly type: "string";
                                            readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                                        };
                                        readonly label: {
                                            readonly description: "A label for the email address such as 'Work', 'Home', etc.";
                                            readonly type: "string";
                                            readonly examples: readonly ["Work"];
                                        };
                                        readonly value: {
                                            readonly format: "email";
                                            readonly type: "string";
                                            readonly examples: readonly ["contact@example.com"];
                                        };
                                    };
                                    readonly required: readonly ["id", "value"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly familyName: {
                                readonly description: "The contact's family name (typically last name in US)";
                                readonly type: "string";
                                readonly examples: readonly ["Smith"];
                            };
                            readonly faxNumbers: {
                                readonly items: {
                                    readonly properties: {
                                        readonly displayValue: {
                                            readonly description: "The contact phone number in an easily readable format.";
                                            readonly type: "string";
                                            readonly examples: readonly ["(222) 555-0000"];
                                        };
                                        readonly id: {
                                            readonly description: "Spruce's phone number ID";
                                            readonly format: "string";
                                            readonly type: "string";
                                            readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                                        };
                                        readonly label: {
                                            readonly description: "A label for the phone number such as 'Work', 'Home', 'Cell', etc.";
                                            readonly type: "string";
                                            readonly examples: readonly ["Work"];
                                        };
                                        readonly value: {
                                            readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                                            readonly format: "string";
                                            readonly type: "string";
                                            readonly examples: readonly [12225550000];
                                        };
                                    };
                                    readonly required: readonly ["id", "value", "displayValue"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly gender: {
                                readonly enum: readonly ["unknown", "male", "female", "other"];
                                readonly type: "string";
                                readonly examples: readonly ["unknown"];
                                readonly description: "`unknown` `male` `female` `other`";
                            };
                            readonly genderDetail: {
                                readonly description: "Optional free-text details for gender";
                                readonly type: "string";
                                readonly examples: readonly ["Non-binary"];
                            };
                            readonly givenName: {
                                readonly description: "The contact's given name (typically first name in US)";
                                readonly type: "string";
                                readonly examples: readonly ["Joe"];
                            };
                            readonly hasAccount: {
                                readonly description: "Whether the contact has created a Spruce account for secure messaging, video calling, etc.";
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly hasPendingInvite: {
                                readonly description: "Whether the contact has a pending Spruce account invitation";
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly id: {
                                readonly description: "Spruce's contact ID";
                                readonly type: "string";
                                readonly examples: readonly ["entity_0E5QDGJC03000"];
                            };
                            readonly integrationLinks: {
                                readonly description: "Links between a contact and an integrated external system.";
                                readonly items: {
                                    readonly properties: {
                                        readonly contactId: {
                                            readonly description: "Spruce's contact ID";
                                            readonly type: "string";
                                            readonly examples: readonly ["entity_0E5QDGJC03000"];
                                        };
                                        readonly externalId: {
                                            readonly description: "The id of a contact in an external system.";
                                            readonly type: "string";
                                            readonly examples: readonly ["elation_140797386655555"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["elation", "hint", "athena", "custom"];
                                            readonly type: "string";
                                            readonly examples: readonly ["elation"];
                                            readonly description: "`elation` `hint` `athena` `custom`";
                                        };
                                        readonly url: {
                                            readonly description: "The url of a contact in an integrated external system.";
                                            readonly type: "string";
                                        };
                                    };
                                    readonly required: readonly ["type", "externalId", "contactId"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly internalMemberIds: {
                                readonly description: "The ids of the teammates, teams and/or your organization that are members of the contact. Contact Membership must be enabled for the organization for this field to be interacted with.";
                                readonly items: {
                                    readonly type: "string";
                                };
                                readonly type: "array";
                            };
                            readonly middleName: {
                                readonly description: "The contact's middle name";
                                readonly type: "string";
                                readonly examples: readonly ["William"];
                            };
                            readonly object: {
                                readonly description: "String representing the object's type";
                                readonly type: "string";
                            };
                            readonly organizationContactFields: {
                                readonly description: "Fields on a contact that are custom";
                                readonly items: {
                                    readonly properties: {
                                        readonly id: {
                                            readonly description: "Spruce's contact organization contact custom field ID";
                                            readonly type: "string";
                                            readonly examples: readonly ["managedCustomField_0E5QDGJC03000"];
                                        };
                                        readonly name: {
                                            readonly description: "A name for the field";
                                            readonly type: "string";
                                            readonly examples: readonly ["Preferred Pharmacy"];
                                        };
                                        readonly value: {
                                            readonly description: "The value of the field";
                                            readonly type: "string";
                                            readonly examples: readonly ["CVS"];
                                        };
                                    };
                                    readonly required: readonly ["id", "name", "value"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly phoneNumbers: {
                                readonly items: {
                                    readonly properties: {
                                        readonly displayValue: {
                                            readonly description: "The contact phone number in an easily readable format.";
                                            readonly type: "string";
                                            readonly examples: readonly ["(222) 555-0000"];
                                        };
                                        readonly id: {
                                            readonly description: "Spruce's phone number ID";
                                            readonly format: "string";
                                            readonly type: "string";
                                            readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                                        };
                                        readonly label: {
                                            readonly description: "A label for the phone number such as 'Work', 'Home', 'Cell', etc.";
                                            readonly type: "string";
                                            readonly examples: readonly ["Work"];
                                        };
                                        readonly value: {
                                            readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                                            readonly format: "string";
                                            readonly type: "string";
                                            readonly examples: readonly [12225550000];
                                        };
                                    };
                                    readonly required: readonly ["id", "value", "displayValue"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly pronouns: {
                                readonly description: "The contact's pronouns";
                                readonly type: "string";
                                readonly examples: readonly ["he/him"];
                            };
                            readonly tags: {
                                readonly items: {
                                    readonly properties: {
                                        readonly id: {
                                            readonly description: "Spruce's contact tag ID";
                                            readonly type: "string";
                                            readonly examples: readonly ["tag_0E5QDGJC03000"];
                                        };
                                        readonly object: {
                                            readonly description: "String representing the object's type";
                                            readonly type: "string";
                                        };
                                        readonly value: {
                                            readonly description: "The text value of a contact tag";
                                            readonly type: "string";
                                            readonly examples: readonly ["Smith"];
                                        };
                                    };
                                    readonly required: readonly ["id", "value", "object"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                        };
                        readonly required: readonly ["id", "displayName", "tags", "gender", "category", "created", "phoneNumbers", "emailAddresses", "customFields", "appURL", "apiURL", "hasAccount", "hasPendingInvite", "customContactFields", "organizationContactFields", "canDelete", "canEdit", "integrationLinks", "object", "internalMemberIds"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly hasMore: {
                    readonly type: "boolean";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                };
                readonly totalCount: {
                    readonly format: "int32";
                    readonly type: "integer";
                    readonly examples: readonly [750];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
            };
            readonly required: readonly ["totalCount", "contacts", "hasMore"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListConversationScheduledMessages: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly conversationId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the conversation to get the scheduled messages for";
                };
            };
            readonly required: readonly ["conversationId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly scheduledMessages: {
                    readonly items: {
                        readonly properties: {
                            readonly conversationId: {
                                readonly description: "Spruce's conversation ID";
                                readonly type: "string";
                                readonly examples: readonly ["t_0E5QDGJC03000"];
                            };
                            readonly createdAt: {
                                readonly description: "The date and time the scheduled message was created";
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2020-04-01T00:00:00Z"];
                            };
                            readonly id: {
                                readonly description: "Spruce's scheduled message ID";
                                readonly type: "string";
                                readonly examples: readonly ["scm_26RRC7PQ6JG00"];
                            };
                            readonly isInternalNote: {
                                readonly description: "If the conversation item is an internal note - which is visible only to the posting side of the conversation.";
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                            readonly message: {
                                readonly properties: {
                                    readonly attachments: {
                                        readonly description: "Attachments for the scheduled message";
                                        readonly items: {
                                            readonly properties: {
                                                readonly data: {
                                                    readonly anyOf: readonly [{
                                                        readonly properties: {
                                                            readonly mimetype: {
                                                                readonly description: "The mimetype of the audio attachment.";
                                                                readonly type: "string";
                                                                readonly examples: readonly ["audio/mpeg"];
                                                            };
                                                            readonly signedUrl: {
                                                                readonly description: "The URL used to fetch the audio attachment.";
                                                                readonly properties: {
                                                                    readonly expiresAt: {
                                                                        readonly description: "The date the signed URL expires.";
                                                                        readonly format: "date-time";
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly url: {
                                                                        readonly description: "The signed URL.";
                                                                        readonly format: "url";
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                                readonly required: readonly ["url", "expiresAt"];
                                                                readonly type: "object";
                                                            };
                                                        };
                                                        readonly required: readonly ["mimetype", "signedUrl"];
                                                        readonly type: "object";
                                                    }, {
                                                        readonly properties: {
                                                            readonly mimetype: {
                                                                readonly description: "The mimetype of the document attachment.";
                                                                readonly type: "string";
                                                                readonly examples: readonly ["application/pdf"];
                                                            };
                                                            readonly name: {
                                                                readonly description: "The name associated with the attached document.";
                                                                readonly type: "string";
                                                            };
                                                            readonly signedUrl: {
                                                                readonly description: "The URL used to fetch the document attachment.";
                                                                readonly properties: {
                                                                    readonly expiresAt: {
                                                                        readonly description: "The date the signed URL expires.";
                                                                        readonly format: "date-time";
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly url: {
                                                                        readonly description: "The signed URL.";
                                                                        readonly format: "url";
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                                readonly required: readonly ["url", "expiresAt"];
                                                                readonly type: "object";
                                                            };
                                                        };
                                                        readonly required: readonly ["name", "mimetype", "signedUrl"];
                                                        readonly type: "object";
                                                    }, {
                                                        readonly properties: {
                                                            readonly title: {
                                                                readonly description: "The title associated with the attached entity profile.";
                                                                readonly type: "string";
                                                                readonly examples: readonly ["John Smith"];
                                                            };
                                                            readonly url: {
                                                                readonly description: "The URL of the entity profile.";
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly required: readonly ["title", "url"];
                                                        readonly type: "object";
                                                    }, {
                                                        readonly properties: {
                                                            readonly mimetype: {
                                                                readonly description: "The mimetype of the image attachment.";
                                                                readonly type: "string";
                                                                readonly examples: readonly ["image/png"];
                                                            };
                                                            readonly signedUrl: {
                                                                readonly description: "The URL used to fetch the image attachment.";
                                                                readonly properties: {
                                                                    readonly expiresAt: {
                                                                        readonly description: "The date the signed URL expires.";
                                                                        readonly format: "date-time";
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly url: {
                                                                        readonly description: "The signed URL.";
                                                                        readonly format: "url";
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                                readonly required: readonly ["url", "expiresAt"];
                                                                readonly type: "object";
                                                            };
                                                        };
                                                        readonly required: readonly ["mimetype", "signedUrl"];
                                                        readonly type: "object";
                                                    }, {
                                                        readonly properties: {
                                                            readonly mimetype: {
                                                                readonly description: "The mimetype of the video attachment.";
                                                                readonly type: "string";
                                                                readonly examples: readonly ["video/mp4"];
                                                            };
                                                            readonly signedUrl: {
                                                                readonly description: "The URL used to fetch the video attachment.";
                                                                readonly properties: {
                                                                    readonly expiresAt: {
                                                                        readonly description: "The date the signed URL expires.";
                                                                        readonly format: "date-time";
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly url: {
                                                                        readonly description: "The signed URL.";
                                                                        readonly format: "url";
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                                readonly required: readonly ["url", "expiresAt"];
                                                                readonly type: "object";
                                                            };
                                                        };
                                                        readonly required: readonly ["mimetype", "signedUrl"];
                                                        readonly type: "object";
                                                    }];
                                                };
                                                readonly title: {
                                                    readonly description: "The title of the attachment.";
                                                    readonly type: "string";
                                                    readonly examples: readonly ["example.pdf"];
                                                };
                                                readonly type: {
                                                    readonly description: "The type of the attachment.";
                                                    readonly enum: readonly ["audio", "carePlan", "document", "entityProfile", "genericUrl", "image", "paymentRequest", "video", "visit"];
                                                };
                                            };
                                            readonly required: readonly ["title", "type"];
                                            readonly type: "object";
                                        };
                                        readonly type: "array";
                                    };
                                    readonly pagedInternalMemberIds: {
                                        readonly description: "The internal member ids that are paged in the scheduled message.";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                        readonly type: "array";
                                    };
                                    readonly text: {
                                        readonly description: "The text of the conversation item. If the conversation item contains pages, they will be listed in the pages property.";
                                        readonly type: "string";
                                        readonly examples: readonly ["Can you look at this @Dr. Smith?"];
                                    };
                                };
                                readonly required: readonly ["attachments", "pagedInternalMemberIds", "text"];
                                readonly type: "object";
                            };
                            readonly modifiedAt: {
                                readonly description: "The date and time the scheduled message was modified";
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2020-04-01T00:00:00Z"];
                            };
                            readonly object: {
                                readonly description: "String representing the object's type";
                                readonly type: "string";
                            };
                            readonly scheduledToSendAt: {
                                readonly description: "The date and time the message is scheduled to be sent";
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2020-04-01T00:00:00Z"];
                            };
                            readonly sendAsInternalMemberId: {
                                readonly description: "The id of a team or teammate in the organization";
                                readonly type: "string";
                                readonly examples: readonly ["entity_0D4QABCC06000"];
                            };
                        };
                        readonly required: readonly ["id", "conversationId", "createdAt", "isInternalNote", "message", "modifiedAt", "sendAsInternalMemberId", "scheduledToSendAt", "object"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
            };
            readonly required: readonly ["scheduledMessages"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListConversations: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly pageSize: {
                    readonly format: "int32";
                    readonly maximum: 200;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "How many conversations to return at one time (max 200)";
                };
                readonly paginationToken: {
                    readonly description: "After fetching a set of conversations, use the returned `paginationToken` to fetch the next page of conversations. Only one of `startFrom` or `paginationToken` can be provided.\n";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly orderBy: {
                    readonly description: "Determines the order of the results. When optionally combined with `startFrom`, you can get conversationswhere the time that you're ordering by is greater than or equal to the specified start from date. For example, `\"orderBy\": \"last_message\"` and `\"startFrom\": \"2025-01-01T00:00:00.000Z\"` will return conversations with a last message time greater than or equal to January 1, 2025 midnight UTC (useful for fetching delta updates from the last time you fetched).\n";
                    readonly enum: readonly ["created", "last_message"];
                    readonly type: "string";
                    readonly examples: readonly ["created"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly startFrom: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2020-03-31T17:00:00-07:00", "2020-04-01T00:00:00Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Only return conversations whose ordering field value is greater than or equal to this timestamp.\n**Format** — RFC 3339 “date-time” (`YYYY-MM-DDTHH:mm:ss.SSS±hh:mm`). Use **Z** for UTC or an explicit offset such as **-07:00**.\n- When `orderBy=created`, you will receive conversations created greater than or equal to the provided startFrom time.\n- When `orderBy=last_message`, you will receive conversations with a last message time greater than or equal to the provided startFrom time.\n- Only one of `startFrom` or `paginationToken` can be provided.\n";
                };
            };
            readonly required: readonly ["orderBy"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly conversations: {
                    readonly items: {
                        readonly properties: {
                            readonly apiURL: {
                                readonly description: "An absolute URL for fetching this conversation from the API";
                                readonly format: "url";
                                readonly type: "string";
                                readonly examples: readonly ["https://api.sprucehealth.com/conversations/t_0E5QDJJC03000"];
                            };
                            readonly appURL: {
                                readonly description: "An absolute URL to view the conversation in the Spruce app";
                                readonly format: "url";
                                readonly type: "string";
                                readonly examples: readonly ["https://app.sprucehealth.com/org/entity_0D4QABCC06000/thread/t_0E5QDJJC03000"];
                            };
                            readonly archived: {
                                readonly description: "Whether or not the conversation is archived";
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                            readonly assignedToMemberId: {
                                readonly description: "The id of the teammate the conversation is assigned to";
                                readonly type: "string";
                                readonly examples: readonly ["entity_0D4QABCC06000"];
                            };
                            readonly associatedContactIds: {
                                readonly description: "The ids of the contacts associated with the conversation. This may include contacts that are not a part of the conversation. For example, the conversation may be with parents, but associated with a contact representing their child.";
                                readonly items: {
                                    readonly type: "string";
                                };
                                readonly type: "array";
                                readonly examples: readonly ["entity_0D4QABCC06000"];
                            };
                            readonly createdAt: {
                                readonly description: "The date the conversation was created";
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2020-04-01T00:00:00Z"];
                            };
                            readonly externalParticipants: {
                                readonly description: "The external participants in the conversation.";
                                readonly items: {
                                    readonly properties: {
                                        readonly contact: {
                                            readonly description: "The id of the contact associated with the participant. This will be omitted if the participant is not a saved contact.";
                                            readonly type: "string";
                                            readonly examples: readonly ["entity_0D4QABCC06000"];
                                        };
                                        readonly displayName: {
                                            readonly description: "The display name of the participant";
                                            readonly type: "string";
                                            readonly examples: readonly ["555-555-5555", "John Doe", "patient@example.com"];
                                        };
                                        readonly endpoint: {
                                            readonly description: "The endpoint of the participant, such as their phone number or email address. For secure conversations, there will not be an endpoint.";
                                            readonly properties: {
                                                readonly channel: {
                                                    readonly description: "The channel of the endpoint (e.g. 'email', 'phone', 'fax', etc.). More endpoint channels may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `fax` `secure`";
                                                    readonly enum: readonly ["email", "phone", "fax", "secure"];
                                                    readonly type: "string";
                                                };
                                                readonly displayValue: {
                                                    readonly description: "The display value of the endpoint. This is the value that should be displayed to the user when showing the endpoint, along with the label if it's populated.";
                                                    readonly type: "string";
                                                };
                                                readonly id: {
                                                    readonly description: "The id of the endpoint";
                                                    readonly type: "string";
                                                    readonly examples: readonly [15555555555];
                                                };
                                                readonly isInternal: {
                                                    readonly description: "Internal endpoints are endpoints that are owned by your organization, such as your organization's Spruce Phone Numbers or Spruce Links.";
                                                    readonly type: "boolean";
                                                    readonly examples: readonly [false];
                                                };
                                                readonly label: {
                                                    readonly description: "The optional label of the endpoint";
                                                    readonly type: "string";
                                                    readonly examples: readonly ["Home", "Work"];
                                                };
                                                readonly object: {
                                                    readonly description: "String representing the object's type";
                                                    readonly type: "string";
                                                };
                                                readonly rawValue: {
                                                    readonly description: "The raw value of the endpoint. This can be used for programmatically comparing contact values. The raw value for a phone/fax number will be in E164 format.";
                                                    readonly type: "string";
                                                };
                                            };
                                            readonly required: readonly ["id", "channel", "displayValue", "rawValue", "isInternal", "object"];
                                            readonly type: "object";
                                        };
                                    };
                                    readonly required: readonly ["displayName"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly id: {
                                readonly description: "Spruce's conversation ID";
                                readonly type: "string";
                                readonly examples: readonly ["t_0E5QDGJC03000"];
                            };
                            readonly internalEndpoint: {
                                readonly description: "The internal endpoint of the conversation. For secure conversations, this will be a Spruce Link.";
                                readonly properties: {
                                    readonly channel: {
                                        readonly description: "The channel of the endpoint (e.g. 'email', 'phone', 'fax', etc.). More endpoint channels may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `fax` `secure`";
                                        readonly enum: readonly ["email", "phone", "fax", "secure"];
                                        readonly type: "string";
                                    };
                                    readonly displayValue: {
                                        readonly description: "The display value of the endpoint. This is the value that should be displayed to the user when showing the endpoint, along with the label if it's populated.";
                                        readonly type: "string";
                                    };
                                    readonly id: {
                                        readonly description: "The id of the endpoint";
                                        readonly type: "string";
                                        readonly examples: readonly [15555555555];
                                    };
                                    readonly isInternal: {
                                        readonly description: "Internal endpoints are endpoints that are owned by your organization, such as your organization's Spruce Phone Numbers or Spruce Links.";
                                        readonly type: "boolean";
                                        readonly examples: readonly [false];
                                    };
                                    readonly label: {
                                        readonly description: "The optional label of the endpoint";
                                        readonly type: "string";
                                        readonly examples: readonly ["Home", "Work"];
                                    };
                                    readonly object: {
                                        readonly description: "String representing the object's type";
                                        readonly type: "string";
                                    };
                                    readonly rawValue: {
                                        readonly description: "The raw value of the endpoint. This can be used for programmatically comparing contact values. The raw value for a phone/fax number will be in E164 format.";
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["id", "channel", "displayValue", "rawValue", "isInternal", "object"];
                                readonly type: "object";
                            };
                            readonly internalMemberIds: {
                                readonly description: "The ids of the teammates, teams and/or your organization that are members of the conversation.";
                                readonly items: {
                                    readonly type: "string";
                                };
                                readonly type: "array";
                                readonly examples: readonly ["entity_0D4QABCC06000"];
                            };
                            readonly isReadOnly: {
                                readonly description: "If the conversation is read-only, messages cannot be sent to it.";
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                            readonly lastMessageAt: {
                                readonly description: "The time of the conversations latest message";
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2020-04-01T00:00:00Z"];
                            };
                            readonly object: {
                                readonly description: "String representing the object's type";
                                readonly type: "string";
                            };
                            readonly subtitle: {
                                readonly description: "The subtitle of the conversation";
                                readonly type: "string";
                                readonly examples: readonly ["Billing"];
                            };
                            readonly tags: {
                                readonly items: {
                                    readonly properties: {
                                        readonly id: {
                                            readonly description: "Spruce's conversation tag ID";
                                            readonly type: "string";
                                            readonly examples: readonly ["tag_0E5QDGJC03000"];
                                        };
                                        readonly object: {
                                            readonly description: "String representing the object's type";
                                            readonly type: "string";
                                        };
                                        readonly value: {
                                            readonly description: "The text value of a conversation tag";
                                            readonly type: "string";
                                            readonly examples: readonly ["Smith"];
                                        };
                                    };
                                    readonly required: readonly ["id", "value", "object"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly title: {
                                readonly description: "The title of the conversation";
                                readonly type: "string";
                                readonly examples: readonly ["John Doe"];
                            };
                            readonly type: {
                                readonly description: "The type of the conversation (e.g. 'email', 'phone', 'secure', etc.). Note that SMS will be in a 'phone' conversation, and video calls will be in a 'secure' conversation. More conversation types may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `secure` `fax` `team` `note` `other`";
                                readonly enum: readonly ["email", "phone", "secure", "fax", "team", "note", "other"];
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["appURL", "apiURL", "archived", "createdAt", "id", "isReadOnly", "tags", "type", "title", "object"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly hasMore: {
                    readonly type: "boolean";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                };
                readonly totalCount: {
                    readonly format: "int32";
                    readonly type: "integer";
                    readonly description: "Total count represents the total number of conversations available. This is a best effort calculation at the time of the initial query. This count will not be recalculated more than once every 60 seconds while iterating a set of results.";
                    readonly examples: readonly [750];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
            };
            readonly required: readonly ["totalCount", "conversations", "hasMore"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListScheduledMessages: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly hasMore: {
                    readonly type: "boolean";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                };
                readonly scheduledMessages: {
                    readonly items: {
                        readonly properties: {
                            readonly conversationId: {
                                readonly description: "Spruce's conversation ID";
                                readonly type: "string";
                                readonly examples: readonly ["t_0E5QDGJC03000"];
                            };
                            readonly createdAt: {
                                readonly description: "The date and time the scheduled message was created";
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2020-04-01T00:00:00Z"];
                            };
                            readonly id: {
                                readonly description: "Spruce's scheduled message ID";
                                readonly type: "string";
                                readonly examples: readonly ["scm_26RRC7PQ6JG00"];
                            };
                            readonly isInternalNote: {
                                readonly description: "If the conversation item is an internal note - which is visible only to the posting side of the conversation.";
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                            readonly message: {
                                readonly properties: {
                                    readonly attachments: {
                                        readonly description: "Attachments for the scheduled message";
                                        readonly items: {
                                            readonly properties: {
                                                readonly data: {
                                                    readonly anyOf: readonly [{
                                                        readonly properties: {
                                                            readonly mimetype: {
                                                                readonly description: "The mimetype of the audio attachment.";
                                                                readonly type: "string";
                                                                readonly examples: readonly ["audio/mpeg"];
                                                            };
                                                            readonly signedUrl: {
                                                                readonly description: "The URL used to fetch the audio attachment.";
                                                                readonly properties: {
                                                                    readonly expiresAt: {
                                                                        readonly description: "The date the signed URL expires.";
                                                                        readonly format: "date-time";
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly url: {
                                                                        readonly description: "The signed URL.";
                                                                        readonly format: "url";
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                                readonly required: readonly ["url", "expiresAt"];
                                                                readonly type: "object";
                                                            };
                                                        };
                                                        readonly required: readonly ["mimetype", "signedUrl"];
                                                        readonly type: "object";
                                                    }, {
                                                        readonly properties: {
                                                            readonly mimetype: {
                                                                readonly description: "The mimetype of the document attachment.";
                                                                readonly type: "string";
                                                                readonly examples: readonly ["application/pdf"];
                                                            };
                                                            readonly name: {
                                                                readonly description: "The name associated with the attached document.";
                                                                readonly type: "string";
                                                            };
                                                            readonly signedUrl: {
                                                                readonly description: "The URL used to fetch the document attachment.";
                                                                readonly properties: {
                                                                    readonly expiresAt: {
                                                                        readonly description: "The date the signed URL expires.";
                                                                        readonly format: "date-time";
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly url: {
                                                                        readonly description: "The signed URL.";
                                                                        readonly format: "url";
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                                readonly required: readonly ["url", "expiresAt"];
                                                                readonly type: "object";
                                                            };
                                                        };
                                                        readonly required: readonly ["name", "mimetype", "signedUrl"];
                                                        readonly type: "object";
                                                    }, {
                                                        readonly properties: {
                                                            readonly title: {
                                                                readonly description: "The title associated with the attached entity profile.";
                                                                readonly type: "string";
                                                                readonly examples: readonly ["John Smith"];
                                                            };
                                                            readonly url: {
                                                                readonly description: "The URL of the entity profile.";
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly required: readonly ["title", "url"];
                                                        readonly type: "object";
                                                    }, {
                                                        readonly properties: {
                                                            readonly mimetype: {
                                                                readonly description: "The mimetype of the image attachment.";
                                                                readonly type: "string";
                                                                readonly examples: readonly ["image/png"];
                                                            };
                                                            readonly signedUrl: {
                                                                readonly description: "The URL used to fetch the image attachment.";
                                                                readonly properties: {
                                                                    readonly expiresAt: {
                                                                        readonly description: "The date the signed URL expires.";
                                                                        readonly format: "date-time";
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly url: {
                                                                        readonly description: "The signed URL.";
                                                                        readonly format: "url";
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                                readonly required: readonly ["url", "expiresAt"];
                                                                readonly type: "object";
                                                            };
                                                        };
                                                        readonly required: readonly ["mimetype", "signedUrl"];
                                                        readonly type: "object";
                                                    }, {
                                                        readonly properties: {
                                                            readonly mimetype: {
                                                                readonly description: "The mimetype of the video attachment.";
                                                                readonly type: "string";
                                                                readonly examples: readonly ["video/mp4"];
                                                            };
                                                            readonly signedUrl: {
                                                                readonly description: "The URL used to fetch the video attachment.";
                                                                readonly properties: {
                                                                    readonly expiresAt: {
                                                                        readonly description: "The date the signed URL expires.";
                                                                        readonly format: "date-time";
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly url: {
                                                                        readonly description: "The signed URL.";
                                                                        readonly format: "url";
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                                readonly required: readonly ["url", "expiresAt"];
                                                                readonly type: "object";
                                                            };
                                                        };
                                                        readonly required: readonly ["mimetype", "signedUrl"];
                                                        readonly type: "object";
                                                    }];
                                                };
                                                readonly title: {
                                                    readonly description: "The title of the attachment.";
                                                    readonly type: "string";
                                                    readonly examples: readonly ["example.pdf"];
                                                };
                                                readonly type: {
                                                    readonly description: "The type of the attachment.";
                                                    readonly enum: readonly ["audio", "carePlan", "document", "entityProfile", "genericUrl", "image", "paymentRequest", "video", "visit"];
                                                };
                                            };
                                            readonly required: readonly ["title", "type"];
                                            readonly type: "object";
                                        };
                                        readonly type: "array";
                                    };
                                    readonly pagedInternalMemberIds: {
                                        readonly description: "The internal member ids that are paged in the scheduled message.";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                        readonly type: "array";
                                    };
                                    readonly text: {
                                        readonly description: "The text of the conversation item. If the conversation item contains pages, they will be listed in the pages property.";
                                        readonly type: "string";
                                        readonly examples: readonly ["Can you look at this @Dr. Smith?"];
                                    };
                                };
                                readonly required: readonly ["attachments", "pagedInternalMemberIds", "text"];
                                readonly type: "object";
                            };
                            readonly modifiedAt: {
                                readonly description: "The date and time the scheduled message was modified";
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2020-04-01T00:00:00Z"];
                            };
                            readonly object: {
                                readonly description: "String representing the object's type";
                                readonly type: "string";
                            };
                            readonly scheduledToSendAt: {
                                readonly description: "The date and time the message is scheduled to be sent";
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2020-04-01T00:00:00Z"];
                            };
                            readonly sendAsInternalMemberId: {
                                readonly description: "The id of a team or teammate in the organization";
                                readonly type: "string";
                                readonly examples: readonly ["entity_0D4QABCC06000"];
                            };
                        };
                        readonly required: readonly ["id", "conversationId", "createdAt", "isInternalNote", "message", "modifiedAt", "sendAsInternalMemberId", "scheduledToSendAt", "object"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly totalCount: {
                    readonly format: "int32";
                    readonly type: "integer";
                    readonly examples: readonly [750];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
            };
            readonly required: readonly ["totalCount", "scheduledMessages", "hasMore"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListWebhookEndpointEvents: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly endpointId: {
                    readonly description: "The id of the webhook destination endpoint.";
                    readonly type: "string";
                    readonly examples: readonly ["wde_01HWDG5ADNBGJ3XXXXXFP8P1GH"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["endpointId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly startTime: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2020-04-01T00:00:00Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The start time of the events to retrieve.";
                };
                readonly endTime: {
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2020-04-01T00:00:00Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The end time of the events to retrieve.";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly events: {
                    readonly items: {
                        readonly description: "An event that has been attempted to be sent to a webhook destination endpoint";
                        readonly properties: {
                            readonly data: {
                                readonly type: "string";
                            };
                            readonly delivery: {
                                readonly description: "Delivery information for an event that has been attempted to be sent to a webhook destination endpoint";
                                readonly properties: {
                                    readonly attemptLimit: {
                                        readonly description: "The maximum number of attempts that will be made to deliver an event";
                                        readonly type: "integer";
                                    };
                                    readonly attempts: {
                                        readonly description: "The number of attempts so far to deliver the event";
                                        readonly type: "integer";
                                    };
                                    readonly deliveryTime: {
                                        readonly description: "The date the event was successfully delivered.";
                                        readonly format: "date-time";
                                        readonly type: "string";
                                        readonly examples: readonly ["2020-04-01T00:00:00Z"];
                                    };
                                    readonly nextAttemptTime: {
                                        readonly description: "The date the event will attempt delivery again.";
                                        readonly format: "date-time";
                                        readonly type: "string";
                                        readonly examples: readonly ["2020-04-01T00:00:00Z"];
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["attempts", "attemptLimit", "status"];
                                readonly type: "object";
                            };
                            readonly eventTime: {
                                readonly description: "The date the event was created";
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2020-04-01T00:00:00Z"];
                            };
                            readonly id: {
                                readonly description: "The id of an event";
                                readonly type: "string";
                                readonly examples: readonly ["wev_01HWDG5ADNBGJ3XXXXXFP8P1GH"];
                            };
                            readonly object: {
                                readonly description: "String representing the object's type";
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["id", "eventTime", "data", "object"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly hasMore: {
                    readonly type: "boolean";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                };
            };
            readonly required: readonly ["events", "hasMore"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListWebhookEndpoints: {
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly endpoints: {
                    readonly items: {
                        readonly properties: {
                            readonly createdAt: {
                                readonly description: "The date the destination endpoint was created";
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2020-04-01T00:00:00Z"];
                            };
                            readonly id: {
                                readonly description: "The id of a webhook destination endpoint";
                                readonly type: "string";
                                readonly examples: readonly ["wde_01HWDG5ADNBGJ3XXXXXFP8P1GH"];
                            };
                            readonly name: {
                                readonly description: "The name of the webhook destination endpoint";
                                readonly type: "string";
                                readonly examples: readonly ["My Webhook Endpoint"];
                            };
                            readonly object: {
                                readonly description: "String representing the object's type";
                                readonly type: "string";
                            };
                            readonly signingSecrets: {
                                readonly items: {
                                    readonly description: "The signing secret for the webhook endpoint. This is used to verify the authenticity of the webhook payload. This value is only populated when the webhook endpoint is created.";
                                    readonly properties: {
                                        readonly id: {
                                            readonly description: "The ID of the signing secret";
                                            readonly type: "string";
                                            readonly examples: readonly ["wss_01HWDG5ADNBGXXXXXY07DP8"];
                                        };
                                        readonly value: {
                                            readonly description: "The signing secret";
                                            readonly type: "string";
                                        };
                                    };
                                    readonly required: readonly ["id", "value"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly status: {
                                readonly description: "The status of the webhook destination endpoint";
                                readonly type: "string";
                            };
                            readonly url: {
                                readonly description: "The URL of the webhook destination endpoint";
                                readonly format: "url";
                                readonly type: "string";
                                readonly examples: readonly ["https://example.com/webhook"];
                            };
                        };
                        readonly required: readonly ["createdAt", "id", "signingSecrets", "status", "url", "object"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
            };
            readonly required: readonly ["endpoints"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ModifyWebhookEndpointPaused: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly endpointId: {
                    readonly description: "The id of the webhook destination endpoint.";
                    readonly type: "string";
                    readonly examples: readonly ["wde_01HWDG5ADNBGJ3XXXXXFP8P1GH"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["endpointId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly paused: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Whether to pause or resume the webhook destination endpoint.";
                };
            };
            readonly required: readonly ["paused"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "s-idempotency-key": {
                    readonly type: "string";
                    readonly examples: readonly ["S7uiKYMMRzAcuG8S"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique value generated by the client used to recognize subsequent retries of the same request. Idempotency keys can be up to 255 characters long.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly paused: {
                    readonly description: "A value representing if the webhook destination endpoint is paused";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
            };
            readonly required: readonly ["paused"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Organization: {
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly organization: {
                    readonly properties: {
                        readonly id: {
                            readonly description: "The id of the organization";
                            readonly type: "string";
                            readonly examples: readonly ["entity_0D4QABCC06000"];
                        };
                        readonly name: {
                            readonly description: "The name of the organization";
                            readonly type: "string";
                            readonly examples: readonly ["Spruce Health"];
                        };
                        readonly object: {
                            readonly description: "String representing the object's type";
                            readonly type: "string";
                        };
                        readonly type: {
                            readonly description: "This will always be 'organization'. This is provided for cases where a organization may be in a mixed list with teammtes and/or teams.";
                            readonly type: "string";
                            readonly examples: readonly ["organization"];
                        };
                    };
                    readonly required: readonly ["id", "name", "type", "object"];
                    readonly type: "object";
                };
            };
            readonly required: readonly ["organization"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OrganizationMember: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly memberId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The unique identifier of the member";
                };
            };
            readonly required: readonly ["memberId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly anyOf: readonly [{
                readonly properties: {
                    readonly displayName: {
                        readonly description: "The full name of the teammate, including any title provided";
                        readonly type: "string";
                        readonly examples: readonly ["John Doe, MD"];
                    };
                    readonly email: {
                        readonly description: "The email address of the teammate";
                        readonly format: "email";
                        readonly type: "string";
                        readonly examples: readonly ["provider@example.com"];
                    };
                    readonly id: {
                        readonly description: "The id of the teammate";
                        readonly type: "string";
                        readonly examples: readonly ["entity_0E5QDGJC03000"];
                    };
                    readonly isAdmin: {
                        readonly description: "Whether or not the teammate is an admin on Spruce";
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly object: {
                        readonly description: "String representing the object's type";
                        readonly type: "string";
                    };
                    readonly type: {
                        readonly description: "This will always be 'teammate'. This is provided for cases where a teammate may be in a mixed list with teams and/or your organization.";
                        readonly type: "string";
                        readonly examples: readonly ["teammate"];
                    };
                };
                readonly required: readonly ["id", "displayName", "isAdmin", "type", "object"];
                readonly type: "object";
            }, {
                readonly properties: {
                    readonly id: {
                        readonly description: "The id of the team";
                        readonly type: "string";
                        readonly examples: readonly ["entity_0D4QABCC06000"];
                    };
                    readonly name: {
                        readonly description: "The name of the team";
                        readonly type: "string";
                        readonly examples: readonly ["Billing Team"];
                    };
                    readonly object: {
                        readonly description: "String representing the object's type";
                        readonly type: "string";
                    };
                    readonly type: {
                        readonly description: "This will always be 'team'. This is provided for cases where a team may be in a mixed list with teammtes and/or your organization.";
                        readonly type: "string";
                        readonly examples: readonly ["team"];
                    };
                };
                readonly required: readonly ["id", "name", "type", "object"];
                readonly type: "object";
            }, {
                readonly properties: {
                    readonly id: {
                        readonly description: "The id of the organization";
                        readonly type: "string";
                        readonly examples: readonly ["entity_0D4QABCC06000"];
                    };
                    readonly name: {
                        readonly description: "The name of the organization";
                        readonly type: "string";
                        readonly examples: readonly ["Spruce Health"];
                    };
                    readonly object: {
                        readonly description: "String representing the object's type";
                        readonly type: "string";
                    };
                    readonly type: {
                        readonly description: "This will always be 'organization'. This is provided for cases where a organization may be in a mixed list with teammtes and/or teams.";
                        readonly type: "string";
                        readonly examples: readonly ["organization"];
                    };
                };
                readonly required: readonly ["id", "name", "type", "object"];
                readonly type: "object";
            }];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const OrganizationMembers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly pageSize: {
                    readonly format: "int32";
                    readonly maximum: 500;
                    readonly minimum: 2;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "How many member to return at one time";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly hasMore: {
                    readonly type: "boolean";
                };
                readonly members: {
                    readonly items: {
                        readonly anyOf: readonly [{
                            readonly properties: {
                                readonly displayName: {
                                    readonly description: "The full name of the teammate, including any title provided";
                                    readonly type: "string";
                                    readonly examples: readonly ["John Doe, MD"];
                                };
                                readonly email: {
                                    readonly description: "The email address of the teammate";
                                    readonly format: "email";
                                    readonly type: "string";
                                    readonly examples: readonly ["provider@example.com"];
                                };
                                readonly id: {
                                    readonly description: "The id of the teammate";
                                    readonly type: "string";
                                    readonly examples: readonly ["entity_0E5QDGJC03000"];
                                };
                                readonly isAdmin: {
                                    readonly description: "Whether or not the teammate is an admin on Spruce";
                                    readonly type: "boolean";
                                    readonly examples: readonly [false];
                                };
                                readonly object: {
                                    readonly description: "String representing the object's type";
                                    readonly type: "string";
                                };
                                readonly type: {
                                    readonly description: "This will always be 'teammate'. This is provided for cases where a teammate may be in a mixed list with teams and/or your organization.";
                                    readonly type: "string";
                                    readonly examples: readonly ["teammate"];
                                };
                            };
                            readonly required: readonly ["id", "displayName", "isAdmin", "type", "object"];
                            readonly type: "object";
                        }, {
                            readonly properties: {
                                readonly id: {
                                    readonly description: "The id of the team";
                                    readonly type: "string";
                                    readonly examples: readonly ["entity_0D4QABCC06000"];
                                };
                                readonly name: {
                                    readonly description: "The name of the team";
                                    readonly type: "string";
                                    readonly examples: readonly ["Billing Team"];
                                };
                                readonly object: {
                                    readonly description: "String representing the object's type";
                                    readonly type: "string";
                                };
                                readonly type: {
                                    readonly description: "This will always be 'team'. This is provided for cases where a team may be in a mixed list with teammtes and/or your organization.";
                                    readonly type: "string";
                                    readonly examples: readonly ["team"];
                                };
                            };
                            readonly required: readonly ["id", "name", "type", "object"];
                            readonly type: "object";
                        }, {
                            readonly properties: {
                                readonly id: {
                                    readonly description: "The id of the organization";
                                    readonly type: "string";
                                    readonly examples: readonly ["entity_0D4QABCC06000"];
                                };
                                readonly name: {
                                    readonly description: "The name of the organization";
                                    readonly type: "string";
                                    readonly examples: readonly ["Spruce Health"];
                                };
                                readonly object: {
                                    readonly description: "String representing the object's type";
                                    readonly type: "string";
                                };
                                readonly type: {
                                    readonly description: "This will always be 'organization'. This is provided for cases where a organization may be in a mixed list with teammtes and/or teams.";
                                    readonly type: "string";
                                    readonly examples: readonly ["organization"];
                                };
                            };
                            readonly required: readonly ["id", "name", "type", "object"];
                            readonly type: "object";
                        }];
                    };
                    readonly type: "array";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                };
                readonly totalCount: {
                    readonly format: "int32";
                    readonly type: "integer";
                    readonly examples: readonly [750];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
            };
            readonly required: readonly ["members", "totalCount", "hasMore"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PhoneLine: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly phonelineId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The unique identifier of the phone line";
                };
            };
            readonly required: readonly ["phonelineId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly description: "phone line";
            readonly properties: {
                readonly id: {
                    readonly description: "Spruce's phone line ID";
                    readonly type: "string";
                    readonly examples: readonly ["pd_26RRC7PQ6JG00"];
                };
                readonly name: {
                    readonly description: "The name of the phone line";
                    readonly type: "string";
                    readonly examples: readonly ["Desk 101"];
                };
            };
            readonly required: readonly ["createdAt", "id", "name"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PhoneLines: {
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly phonelines: {
                    readonly items: {
                        readonly description: "phone line";
                        readonly properties: {
                            readonly id: {
                                readonly description: "Spruce's phone line ID";
                                readonly type: "string";
                                readonly examples: readonly ["pd_26RRC7PQ6JG00"];
                            };
                            readonly name: {
                                readonly description: "The name of the phone line";
                                readonly type: "string";
                                readonly examples: readonly ["Desk 101"];
                            };
                        };
                        readonly required: readonly ["createdAt", "id", "name"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly totalCount: {
                    readonly format: "int32";
                    readonly type: "integer";
                    readonly examples: readonly [750];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
            };
            readonly required: readonly ["phonelines", "totalCount"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostConversationMessage: {
    readonly body: {
        readonly properties: {
            readonly attachments: {
                readonly items: {
                    readonly properties: {
                        readonly attachmentId: {
                            readonly description: "The id of the attachment. In most cases, this will be a media id returned from posting a file to the [media endpoint](/reference/uploadmedia).";
                            readonly type: "string";
                            readonly examples: readonly ["d7b25969-86ec-7e37-3776-3577-c0637a0c"];
                        };
                        readonly title: {
                            readonly description: "The title of the attachment";
                            readonly type: "string";
                            readonly examples: readonly ["My Image"];
                        };
                    };
                    readonly required: readonly ["attachmentId", "title"];
                    readonly type: "object";
                };
                readonly maxItems: 5;
                readonly type: "array";
            };
            readonly author: {
                readonly description: "The ID of the organization member (teammate, team, or organization) to send the message as. If not provided, defaults to the organization.";
                readonly type: "string";
                readonly examples: readonly ["entity_0D4QABCC06000"];
            };
            readonly body: {
                readonly items: {
                    readonly description: "An element of a message body. This can be either a `text` or `page` type element. A `text` element is a string of text to be placed in the message. A `page` element is a reference to an organization member. For a `page` element, the value field should be the Spruce id of the organization member being referenced.";
                    readonly properties: {
                        readonly type: {
                            readonly enum: readonly ["text", "page"];
                            readonly type: "string";
                            readonly examples: readonly ["text"];
                        };
                        readonly value: {
                            readonly description: "The value of the message body element";
                            readonly type: "string";
                            readonly examples: readonly ["Hello, how are you?"];
                        };
                    };
                    readonly required: readonly ["type", "value"];
                    readonly type: "object";
                };
                readonly type: "array";
            };
            readonly internal: {
                readonly description: "Whether the message is internal or not";
                readonly type: "boolean";
                readonly examples: readonly [false];
            };
            readonly stayArchived: {
                readonly description: "Whether the conversation should stay archived (if it is already archived) after the message is sent";
                readonly type: "boolean";
                readonly examples: readonly [false];
            };
        };
        readonly required: readonly ["body"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly conversationId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the conversation to post to";
                };
            };
            readonly required: readonly ["conversationId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "s-idempotency-key": {
                    readonly type: "string";
                    readonly examples: readonly ["S7uiKYMMRzAcuG8S"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique value generated by the client used to recognize subsequent retries of the same request. Idempotency keys can be up to 255 characters long.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly requestId: {
                    readonly description: "The id of an asynchronous request";
                    readonly type: "string";
                    readonly examples: readonly ["asyncRequest_0D4QABCC06000"];
                };
            };
            readonly required: readonly ["requestId"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostMessageFromEndpoint: {
    readonly body: {
        readonly properties: {
            readonly destination: {
                readonly properties: {
                    readonly faxEndpoint: {
                        readonly description: "The fax number to send the message to.";
                        readonly type: "string";
                    };
                    readonly secureEndpoint: {
                        readonly properties: {
                            readonly contactId: {
                                readonly description: "The Spruce id of the contact to send the message to.";
                                readonly type: "string";
                            };
                            readonly deliveryMethod: {
                                readonly description: " `any_available_secure_conversation`: The system will first try to deliver messages using conversations from the specified internal endpoint. Then it will try to deliver to any existing secure conversation with the recipient. Then, if no conversation exists, a new secure conversation will be created.\n`only_conversations_matching_internal_endpoint`: The system will deliver messages in conversations from the specified internal endpoint. If such a conversation doesn't yet exist, a new one will be created.\n`new_conversation`: This option will create a new conversation, separate from any existing conversation. ";
                                readonly enum: readonly ["any_available_secure_conversation", "only_conversations_matching_internal_endpoint", "new_conversation"];
                                readonly type: "string";
                                readonly examples: readonly ["only_conversations_matching_internal_endpoint"];
                            };
                            readonly subject: {
                                readonly description: "The subject of the message.";
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["contactId"];
                        readonly type: "object";
                    };
                    readonly smsOrEmailEndpoint: {
                        readonly description: "The phone number or email address to send the message to.";
                        readonly type: "string";
                    };
                };
                readonly type: "object";
            };
            readonly message: {
                readonly properties: {
                    readonly attachments: {
                        readonly items: {
                            readonly properties: {
                                readonly attachmentId: {
                                    readonly description: "The id of the attachment. In most cases, this will be a media id returned from posting a file to the [media endpoint](/reference/uploadmedia).";
                                    readonly type: "string";
                                    readonly examples: readonly ["d7b25969-86ec-7e37-3776-3577-c0637a0c"];
                                };
                                readonly title: {
                                    readonly description: "The title of the attachment";
                                    readonly type: "string";
                                    readonly examples: readonly ["My Image"];
                                };
                            };
                            readonly required: readonly ["attachmentId", "title"];
                            readonly type: "object";
                        };
                        readonly maxItems: 5;
                        readonly type: "array";
                    };
                    readonly author: {
                        readonly description: "The ID of the organization member (teammate, team, or organization) to send the message as. If not provided, defaults to the organization.";
                        readonly type: "string";
                        readonly examples: readonly ["entity_0D4QABCC06000"];
                    };
                    readonly body: {
                        readonly items: {
                            readonly description: "An element of a message body. This can be either a `text` or `page` type element. A `text` element is a string of text to be placed in the message. A `page` element is a reference to an organization member. For a `page` element, the value field should be the Spruce id of the organization member being referenced.";
                            readonly properties: {
                                readonly type: {
                                    readonly enum: readonly ["text", "page"];
                                    readonly type: "string";
                                    readonly examples: readonly ["text"];
                                };
                                readonly value: {
                                    readonly description: "The value of the message body element";
                                    readonly type: "string";
                                    readonly examples: readonly ["Hello, how are you?"];
                                };
                            };
                            readonly required: readonly ["type", "value"];
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly internal: {
                        readonly description: "Whether the message is internal or not";
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                    readonly stayArchived: {
                        readonly description: "Whether the conversation should stay archived (if it is already archived) after the message is sent";
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                };
                readonly required: readonly ["body"];
                readonly type: "object";
            };
            readonly sendAt: {
                readonly description: "The date and time the message is scheduled to be sent";
                readonly format: "date-time";
                readonly type: "string";
                readonly examples: readonly ["2020-04-01T00:00:00Z"];
            };
        };
        readonly required: readonly ["destination", "message"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly internalEndpointId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the endpoint to send the message from.";
                };
            };
            readonly required: readonly ["internalEndpointId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "s-idempotency-key": {
                    readonly type: "string";
                    readonly examples: readonly ["S7uiKYMMRzAcuG8S"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique value generated by the client used to recognize subsequent retries of the same request. Idempotency keys can be up to 255 characters long.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly requestId: {
                    readonly description: "The id of an asynchronous request";
                    readonly type: "string";
                    readonly examples: readonly ["asyncRequest_0D4QABCC06000"];
                };
            };
            readonly required: readonly ["requestId"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ScheduleConversationMessage: {
    readonly body: {
        readonly properties: {
            readonly message: {
                readonly properties: {
                    readonly author: {
                        readonly description: "The ID of the organization member (teammate, team, or organization) to send the message as. If not provided, defaults to the organization.";
                        readonly type: "string";
                        readonly examples: readonly ["entity_0D4QABCC06000"];
                    };
                    readonly body: {
                        readonly items: {
                            readonly description: "An element of a message body. This can be either a `text` or `page` type element. A `text` element is a string of text to be placed in the message. A `page` element is a reference to an organization member. For a `page` element, the value field should be the Spruce id of the organization member being referenced.";
                            readonly properties: {
                                readonly type: {
                                    readonly enum: readonly ["text", "page"];
                                    readonly type: "string";
                                    readonly examples: readonly ["text"];
                                };
                                readonly value: {
                                    readonly description: "The value of the message body element";
                                    readonly type: "string";
                                    readonly examples: readonly ["Hello, how are you?"];
                                };
                            };
                            readonly required: readonly ["type", "value"];
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly internal: {
                        readonly description: "Whether the message is internal or not";
                        readonly type: "boolean";
                        readonly examples: readonly [false];
                    };
                };
                readonly required: readonly ["body"];
                readonly type: "object";
            };
            readonly sendAt: {
                readonly description: "The date and time the message is scheduled to be sent";
                readonly format: "date-time";
                readonly type: "string";
                readonly examples: readonly ["2020-04-01T00:00:00Z"];
            };
        };
        readonly required: readonly ["message", "sendAt"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly conversationId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the conversation to schedule the message for";
                };
            };
            readonly required: readonly ["conversationId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "s-idempotency-key": {
                    readonly type: "string";
                    readonly examples: readonly ["S7uiKYMMRzAcuG8S"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique value generated by the client used to recognize subsequent retries of the same request. Idempotency keys can be up to 255 characters long.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly scheduledMessage: {
                    readonly properties: {
                        readonly conversationId: {
                            readonly description: "Spruce's conversation ID";
                            readonly type: "string";
                            readonly examples: readonly ["t_0E5QDGJC03000"];
                        };
                        readonly createdAt: {
                            readonly description: "The date and time the scheduled message was created";
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly examples: readonly ["2020-04-01T00:00:00Z"];
                        };
                        readonly id: {
                            readonly description: "Spruce's scheduled message ID";
                            readonly type: "string";
                            readonly examples: readonly ["scm_26RRC7PQ6JG00"];
                        };
                        readonly isInternalNote: {
                            readonly description: "If the conversation item is an internal note - which is visible only to the posting side of the conversation.";
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly message: {
                            readonly properties: {
                                readonly attachments: {
                                    readonly description: "Attachments for the scheduled message";
                                    readonly items: {
                                        readonly properties: {
                                            readonly data: {
                                                readonly anyOf: readonly [{
                                                    readonly properties: {
                                                        readonly mimetype: {
                                                            readonly description: "The mimetype of the audio attachment.";
                                                            readonly type: "string";
                                                            readonly examples: readonly ["audio/mpeg"];
                                                        };
                                                        readonly signedUrl: {
                                                            readonly description: "The URL used to fetch the audio attachment.";
                                                            readonly properties: {
                                                                readonly expiresAt: {
                                                                    readonly description: "The date the signed URL expires.";
                                                                    readonly format: "date-time";
                                                                    readonly type: "string";
                                                                };
                                                                readonly url: {
                                                                    readonly description: "The signed URL.";
                                                                    readonly format: "url";
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly required: readonly ["url", "expiresAt"];
                                                            readonly type: "object";
                                                        };
                                                    };
                                                    readonly required: readonly ["mimetype", "signedUrl"];
                                                    readonly type: "object";
                                                }, {
                                                    readonly properties: {
                                                        readonly mimetype: {
                                                            readonly description: "The mimetype of the document attachment.";
                                                            readonly type: "string";
                                                            readonly examples: readonly ["application/pdf"];
                                                        };
                                                        readonly name: {
                                                            readonly description: "The name associated with the attached document.";
                                                            readonly type: "string";
                                                        };
                                                        readonly signedUrl: {
                                                            readonly description: "The URL used to fetch the document attachment.";
                                                            readonly properties: {
                                                                readonly expiresAt: {
                                                                    readonly description: "The date the signed URL expires.";
                                                                    readonly format: "date-time";
                                                                    readonly type: "string";
                                                                };
                                                                readonly url: {
                                                                    readonly description: "The signed URL.";
                                                                    readonly format: "url";
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly required: readonly ["url", "expiresAt"];
                                                            readonly type: "object";
                                                        };
                                                    };
                                                    readonly required: readonly ["name", "mimetype", "signedUrl"];
                                                    readonly type: "object";
                                                }, {
                                                    readonly properties: {
                                                        readonly title: {
                                                            readonly description: "The title associated with the attached entity profile.";
                                                            readonly type: "string";
                                                            readonly examples: readonly ["John Smith"];
                                                        };
                                                        readonly url: {
                                                            readonly description: "The URL of the entity profile.";
                                                            readonly type: "string";
                                                        };
                                                    };
                                                    readonly required: readonly ["title", "url"];
                                                    readonly type: "object";
                                                }, {
                                                    readonly properties: {
                                                        readonly mimetype: {
                                                            readonly description: "The mimetype of the image attachment.";
                                                            readonly type: "string";
                                                            readonly examples: readonly ["image/png"];
                                                        };
                                                        readonly signedUrl: {
                                                            readonly description: "The URL used to fetch the image attachment.";
                                                            readonly properties: {
                                                                readonly expiresAt: {
                                                                    readonly description: "The date the signed URL expires.";
                                                                    readonly format: "date-time";
                                                                    readonly type: "string";
                                                                };
                                                                readonly url: {
                                                                    readonly description: "The signed URL.";
                                                                    readonly format: "url";
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly required: readonly ["url", "expiresAt"];
                                                            readonly type: "object";
                                                        };
                                                    };
                                                    readonly required: readonly ["mimetype", "signedUrl"];
                                                    readonly type: "object";
                                                }, {
                                                    readonly properties: {
                                                        readonly mimetype: {
                                                            readonly description: "The mimetype of the video attachment.";
                                                            readonly type: "string";
                                                            readonly examples: readonly ["video/mp4"];
                                                        };
                                                        readonly signedUrl: {
                                                            readonly description: "The URL used to fetch the video attachment.";
                                                            readonly properties: {
                                                                readonly expiresAt: {
                                                                    readonly description: "The date the signed URL expires.";
                                                                    readonly format: "date-time";
                                                                    readonly type: "string";
                                                                };
                                                                readonly url: {
                                                                    readonly description: "The signed URL.";
                                                                    readonly format: "url";
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly required: readonly ["url", "expiresAt"];
                                                            readonly type: "object";
                                                        };
                                                    };
                                                    readonly required: readonly ["mimetype", "signedUrl"];
                                                    readonly type: "object";
                                                }];
                                            };
                                            readonly title: {
                                                readonly description: "The title of the attachment.";
                                                readonly type: "string";
                                                readonly examples: readonly ["example.pdf"];
                                            };
                                            readonly type: {
                                                readonly description: "The type of the attachment.";
                                                readonly enum: readonly ["audio", "carePlan", "document", "entityProfile", "genericUrl", "image", "paymentRequest", "video", "visit"];
                                            };
                                        };
                                        readonly required: readonly ["title", "type"];
                                        readonly type: "object";
                                    };
                                    readonly type: "array";
                                };
                                readonly pagedInternalMemberIds: {
                                    readonly description: "The internal member ids that are paged in the scheduled message.";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                    readonly type: "array";
                                };
                                readonly text: {
                                    readonly description: "The text of the conversation item. If the conversation item contains pages, they will be listed in the pages property.";
                                    readonly type: "string";
                                    readonly examples: readonly ["Can you look at this @Dr. Smith?"];
                                };
                            };
                            readonly required: readonly ["attachments", "pagedInternalMemberIds", "text"];
                            readonly type: "object";
                        };
                        readonly modifiedAt: {
                            readonly description: "The date and time the scheduled message was modified";
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly examples: readonly ["2020-04-01T00:00:00Z"];
                        };
                        readonly object: {
                            readonly description: "String representing the object's type";
                            readonly type: "string";
                        };
                        readonly scheduledToSendAt: {
                            readonly description: "The date and time the message is scheduled to be sent";
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly examples: readonly ["2020-04-01T00:00:00Z"];
                        };
                        readonly sendAsInternalMemberId: {
                            readonly description: "The id of a team or teammate in the organization";
                            readonly type: "string";
                            readonly examples: readonly ["entity_0D4QABCC06000"];
                        };
                    };
                    readonly required: readonly ["id", "conversationId", "createdAt", "isInternalNote", "message", "modifiedAt", "sendAsInternalMemberId", "scheduledToSendAt", "object"];
                    readonly type: "object";
                };
            };
            readonly required: readonly ["scheduledMessage"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SearchContacts: {
    readonly body: {
        readonly description: "Contact Search json object.";
        readonly properties: {
            readonly freeText: {
                readonly type: "string";
            };
            readonly structured: {
                readonly properties: {
                    readonly ageFilter: {
                        readonly items: {
                            readonly properties: {
                                readonly ages: {
                                    readonly items: {
                                        readonly properties: {
                                            readonly age: {
                                                readonly format: "int32";
                                                readonly type: "integer";
                                                readonly minimum: -2147483648;
                                                readonly maximum: 2147483647;
                                            };
                                            readonly comparison: {
                                                readonly enum: readonly ["equal", "less_than", "less_than_or_equal_to", "greater_than", "greater_than_or_equal_to"];
                                                readonly type: "string";
                                                readonly examples: readonly ["equal"];
                                            };
                                        };
                                        readonly required: readonly ["age", "comparison"];
                                        readonly type: "object";
                                    };
                                    readonly type: "array";
                                };
                                readonly match: {
                                    readonly enum: readonly ["all", "any", "none"];
                                    readonly type: "string";
                                    readonly examples: readonly ["all"];
                                };
                            };
                            readonly required: readonly ["ages", "match"];
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly categoryFilter: {
                        readonly items: {
                            readonly properties: {
                                readonly categories: {
                                    readonly items: {
                                        readonly enum: readonly ["patient", "professional", "clinic", "unknown"];
                                        readonly type: "string";
                                        readonly examples: readonly ["patient"];
                                    };
                                    readonly type: "array";
                                };
                                readonly match: {
                                    readonly enum: readonly ["all", "any", "none"];
                                    readonly type: "string";
                                    readonly examples: readonly ["all"];
                                };
                            };
                            readonly required: readonly ["categories", "match"];
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly createdTimeFilter: {
                        readonly items: {
                            readonly properties: {
                                readonly createdTimes: {
                                    readonly items: {
                                        readonly properties: {
                                            readonly comparison: {
                                                readonly enum: readonly ["equal", "less_than", "less_than_or_equal_to", "greater_than", "greater_than_or_equal_to"];
                                                readonly type: "string";
                                                readonly examples: readonly ["equal"];
                                            };
                                            readonly time: {
                                                readonly description: "The date this contact was added to Spruce";
                                                readonly format: "date-time";
                                                readonly type: "string";
                                                readonly examples: readonly ["2021-01-30T08:30:00Z"];
                                            };
                                        };
                                        readonly required: readonly ["time", "comparison"];
                                        readonly type: "object";
                                    };
                                    readonly type: "array";
                                };
                                readonly match: {
                                    readonly enum: readonly ["all", "any", "none"];
                                    readonly type: "string";
                                    readonly examples: readonly ["all"];
                                };
                            };
                            readonly required: readonly ["createdTimes", "match"];
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly emailAddressFilter: {
                        readonly items: {
                            readonly properties: {
                                readonly match: {
                                    readonly enum: readonly ["all", "any", "none"];
                                    readonly type: "string";
                                    readonly examples: readonly ["all"];
                                };
                                readonly values: {
                                    readonly items: {
                                        readonly format: "email";
                                        readonly type: "string";
                                        readonly examples: readonly ["contact@example.com"];
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly required: readonly ["values", "match"];
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly faxNumberFilter: {
                        readonly items: {
                            readonly properties: {
                                readonly match: {
                                    readonly enum: readonly ["all", "any", "none"];
                                    readonly type: "string";
                                    readonly examples: readonly ["all"];
                                };
                                readonly values: {
                                    readonly items: {
                                        readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                                        readonly format: "string";
                                        readonly type: "string";
                                        readonly examples: readonly [12225550000];
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly required: readonly ["values", "match"];
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly genderFilter: {
                        readonly items: {
                            readonly properties: {
                                readonly genders: {
                                    readonly items: {
                                        readonly enum: readonly ["unknown", "male", "female", "other"];
                                        readonly type: "string";
                                        readonly examples: readonly ["unknown"];
                                    };
                                    readonly type: "array";
                                };
                                readonly match: {
                                    readonly enum: readonly ["all", "any", "none"];
                                    readonly type: "string";
                                    readonly examples: readonly ["all"];
                                };
                            };
                            readonly required: readonly ["genders", "match"];
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly integrationIDFilter: {
                        readonly items: {
                            readonly properties: {
                                readonly integrationIDs: {
                                    readonly items: {
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly integrationLinkType: {
                                                readonly enum: readonly ["elation", "hint", "athena", "custom"];
                                                readonly type: "string";
                                                readonly examples: readonly ["elation"];
                                            };
                                        };
                                        readonly required: readonly ["integrationLinkType", "id"];
                                        readonly type: "object";
                                    };
                                    readonly type: "array";
                                };
                                readonly match: {
                                    readonly enum: readonly ["all", "any", "none"];
                                    readonly type: "string";
                                    readonly examples: readonly ["all"];
                                };
                            };
                            readonly required: readonly ["integrationIDs", "match"];
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly inviteFilter: {
                        readonly items: {
                            readonly properties: {
                                readonly inviteStates: {
                                    readonly items: {
                                        readonly enum: readonly ["has_account", "invited", "not_invited"];
                                        readonly type: "string";
                                        readonly examples: readonly ["has_account"];
                                    };
                                    readonly type: "array";
                                };
                                readonly match: {
                                    readonly enum: readonly ["all", "any", "none"];
                                    readonly type: "string";
                                    readonly examples: readonly ["all"];
                                };
                            };
                            readonly required: readonly ["inviteStates", "match"];
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly nameFilter: {
                        readonly items: {
                            readonly properties: {
                                readonly match: {
                                    readonly enum: readonly ["all", "any", "none"];
                                    readonly type: "string";
                                    readonly examples: readonly ["all"];
                                };
                                readonly names: {
                                    readonly items: {
                                        readonly properties: {
                                            readonly familyName: {
                                                readonly type: "string";
                                            };
                                            readonly givenName: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly type: "object";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly required: readonly ["names", "match"];
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly organizationContactFieldFilter: {
                        readonly items: {
                            readonly properties: {
                                readonly match: {
                                    readonly enum: readonly ["all", "any", "none"];
                                    readonly type: "string";
                                    readonly examples: readonly ["all"];
                                };
                                readonly organizationContactFields: {
                                    readonly items: {
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly value: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly required: readonly ["name", "value"];
                                        readonly type: "object";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly required: readonly ["organizationContactFields", "match"];
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly phoneNumberFilter: {
                        readonly items: {
                            readonly properties: {
                                readonly match: {
                                    readonly enum: readonly ["all", "any", "none"];
                                    readonly type: "string";
                                    readonly examples: readonly ["all"];
                                };
                                readonly values: {
                                    readonly items: {
                                        readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                                        readonly format: "string";
                                        readonly type: "string";
                                        readonly examples: readonly [12225550000];
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly required: readonly ["values", "match"];
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly tagFilter: {
                        readonly items: {
                            readonly properties: {
                                readonly match: {
                                    readonly enum: readonly ["all", "any", "none"];
                                    readonly type: "string";
                                    readonly examples: readonly ["all"];
                                };
                                readonly tags: {
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                    readonly type: "array";
                                };
                            };
                            readonly required: readonly ["tags", "match"];
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                };
                readonly type: "object";
            };
        };
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly pageSize: {
                    readonly format: "int32";
                    readonly maximum: 500;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "How many contacts to return at one time";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly contacts: {
                    readonly items: {
                        readonly properties: {
                            readonly apiURL: {
                                readonly description: "An absolute URL for fetching this contact from the API";
                                readonly format: "url";
                                readonly type: "string";
                                readonly examples: readonly ["https://api.sprucehealth.com/contact/entity_0E5QDGJC03000"];
                            };
                            readonly appURL: {
                                readonly description: "An absolute URL to view the contact in the Spruce app";
                                readonly format: "url";
                                readonly type: "string";
                                readonly examples: readonly ["https://app.sprucehealth.com/org/entity_0D4QABCC06000/contact/entity_0E5QDGJC03000"];
                            };
                            readonly canDelete: {
                                readonly description: "Whether the contact may be deleted.";
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly canEdit: {
                                readonly description: "Whether the contact may be edited.";
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly category: {
                                readonly enum: readonly ["patient", "professional", "clinic", "unknown"];
                                readonly type: "string";
                                readonly examples: readonly ["patient"];
                                readonly description: "`patient` `professional` `clinic` `unknown`";
                            };
                            readonly companyName: {
                                readonly description: "The contact's company. This field can also be used to specify the name of a non-patient contact, such as another healthcare facility.";
                                readonly type: "string";
                                readonly examples: readonly ["Walgreens"];
                            };
                            readonly created: {
                                readonly description: "The date this contact was added to Spruce";
                                readonly format: "date-time";
                                readonly type: "string";
                                readonly examples: readonly ["2021-01-30T08:30:00Z"];
                            };
                            readonly customContactFields: {
                                readonly description: "Fields on a contact that are custom";
                                readonly items: {
                                    readonly properties: {
                                        readonly id: {
                                            readonly description: "Spruce's contact contact custom field ID";
                                            readonly type: "string";
                                            readonly examples: readonly ["entityCustomField_0E5QDGJC03000"];
                                        };
                                        readonly name: {
                                            readonly description: "A name for the field";
                                            readonly type: "string";
                                            readonly examples: readonly ["Preferred Pharmacy"];
                                        };
                                        readonly value: {
                                            readonly description: "The value of the field";
                                            readonly type: "string";
                                            readonly examples: readonly ["CVS"];
                                        };
                                    };
                                    readonly required: readonly ["id", "name", "value"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly dateOfBirth: {
                                readonly description: "The contact's date of birth in the format YYYY-MM-DD.";
                                readonly format: "date";
                                readonly type: "string";
                                readonly examples: readonly ["2000-01-30"];
                            };
                            readonly displayName: {
                                readonly description: "The contact's full name for easy display to a user. This is determined by combining the givenName, middleName, and familyName, or if those are all empty, falling back to companyName, phone number or email address.";
                                readonly type: "string";
                                readonly examples: readonly ["Joe William Smith"];
                            };
                            readonly emailAddresses: {
                                readonly items: {
                                    readonly properties: {
                                        readonly id: {
                                            readonly description: "Spruce's phone number ID";
                                            readonly format: "string";
                                            readonly type: "string";
                                            readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                                        };
                                        readonly label: {
                                            readonly description: "A label for the email address such as 'Work', 'Home', etc.";
                                            readonly type: "string";
                                            readonly examples: readonly ["Work"];
                                        };
                                        readonly value: {
                                            readonly format: "email";
                                            readonly type: "string";
                                            readonly examples: readonly ["contact@example.com"];
                                        };
                                    };
                                    readonly required: readonly ["id", "value"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly familyName: {
                                readonly description: "The contact's family name (typically last name in US)";
                                readonly type: "string";
                                readonly examples: readonly ["Smith"];
                            };
                            readonly faxNumbers: {
                                readonly items: {
                                    readonly properties: {
                                        readonly displayValue: {
                                            readonly description: "The contact phone number in an easily readable format.";
                                            readonly type: "string";
                                            readonly examples: readonly ["(222) 555-0000"];
                                        };
                                        readonly id: {
                                            readonly description: "Spruce's phone number ID";
                                            readonly format: "string";
                                            readonly type: "string";
                                            readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                                        };
                                        readonly label: {
                                            readonly description: "A label for the phone number such as 'Work', 'Home', 'Cell', etc.";
                                            readonly type: "string";
                                            readonly examples: readonly ["Work"];
                                        };
                                        readonly value: {
                                            readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                                            readonly format: "string";
                                            readonly type: "string";
                                            readonly examples: readonly [12225550000];
                                        };
                                    };
                                    readonly required: readonly ["id", "value", "displayValue"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly gender: {
                                readonly enum: readonly ["unknown", "male", "female", "other"];
                                readonly type: "string";
                                readonly examples: readonly ["unknown"];
                                readonly description: "`unknown` `male` `female` `other`";
                            };
                            readonly genderDetail: {
                                readonly description: "Optional free-text details for gender";
                                readonly type: "string";
                                readonly examples: readonly ["Non-binary"];
                            };
                            readonly givenName: {
                                readonly description: "The contact's given name (typically first name in US)";
                                readonly type: "string";
                                readonly examples: readonly ["Joe"];
                            };
                            readonly hasAccount: {
                                readonly description: "Whether the contact has created a Spruce account for secure messaging, video calling, etc.";
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly hasPendingInvite: {
                                readonly description: "Whether the contact has a pending Spruce account invitation";
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly id: {
                                readonly description: "Spruce's contact ID";
                                readonly type: "string";
                                readonly examples: readonly ["entity_0E5QDGJC03000"];
                            };
                            readonly integrationLinks: {
                                readonly description: "Links between a contact and an integrated external system.";
                                readonly items: {
                                    readonly properties: {
                                        readonly contactId: {
                                            readonly description: "Spruce's contact ID";
                                            readonly type: "string";
                                            readonly examples: readonly ["entity_0E5QDGJC03000"];
                                        };
                                        readonly externalId: {
                                            readonly description: "The id of a contact in an external system.";
                                            readonly type: "string";
                                            readonly examples: readonly ["elation_140797386655555"];
                                        };
                                        readonly type: {
                                            readonly enum: readonly ["elation", "hint", "athena", "custom"];
                                            readonly type: "string";
                                            readonly examples: readonly ["elation"];
                                            readonly description: "`elation` `hint` `athena` `custom`";
                                        };
                                        readonly url: {
                                            readonly description: "The url of a contact in an integrated external system.";
                                            readonly type: "string";
                                        };
                                    };
                                    readonly required: readonly ["type", "externalId", "contactId"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly internalMemberIds: {
                                readonly description: "The ids of the teammates, teams and/or your organization that are members of the contact. Contact Membership must be enabled for the organization for this field to be interacted with.";
                                readonly items: {
                                    readonly type: "string";
                                };
                                readonly type: "array";
                            };
                            readonly middleName: {
                                readonly description: "The contact's middle name";
                                readonly type: "string";
                                readonly examples: readonly ["William"];
                            };
                            readonly object: {
                                readonly description: "String representing the object's type";
                                readonly type: "string";
                            };
                            readonly organizationContactFields: {
                                readonly description: "Fields on a contact that are custom";
                                readonly items: {
                                    readonly properties: {
                                        readonly id: {
                                            readonly description: "Spruce's contact organization contact custom field ID";
                                            readonly type: "string";
                                            readonly examples: readonly ["managedCustomField_0E5QDGJC03000"];
                                        };
                                        readonly name: {
                                            readonly description: "A name for the field";
                                            readonly type: "string";
                                            readonly examples: readonly ["Preferred Pharmacy"];
                                        };
                                        readonly value: {
                                            readonly description: "The value of the field";
                                            readonly type: "string";
                                            readonly examples: readonly ["CVS"];
                                        };
                                    };
                                    readonly required: readonly ["id", "name", "value"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly phoneNumbers: {
                                readonly items: {
                                    readonly properties: {
                                        readonly displayValue: {
                                            readonly description: "The contact phone number in an easily readable format.";
                                            readonly type: "string";
                                            readonly examples: readonly ["(222) 555-0000"];
                                        };
                                        readonly id: {
                                            readonly description: "Spruce's phone number ID";
                                            readonly format: "string";
                                            readonly type: "string";
                                            readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                                        };
                                        readonly label: {
                                            readonly description: "A label for the phone number such as 'Work', 'Home', 'Cell', etc.";
                                            readonly type: "string";
                                            readonly examples: readonly ["Work"];
                                        };
                                        readonly value: {
                                            readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                                            readonly format: "string";
                                            readonly type: "string";
                                            readonly examples: readonly [12225550000];
                                        };
                                    };
                                    readonly required: readonly ["id", "value", "displayValue"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                            readonly pronouns: {
                                readonly description: "The contact's pronouns";
                                readonly type: "string";
                                readonly examples: readonly ["he/him"];
                            };
                            readonly tags: {
                                readonly items: {
                                    readonly properties: {
                                        readonly id: {
                                            readonly description: "Spruce's contact tag ID";
                                            readonly type: "string";
                                            readonly examples: readonly ["tag_0E5QDGJC03000"];
                                        };
                                        readonly object: {
                                            readonly description: "String representing the object's type";
                                            readonly type: "string";
                                        };
                                        readonly value: {
                                            readonly description: "The text value of a contact tag";
                                            readonly type: "string";
                                            readonly examples: readonly ["Smith"];
                                        };
                                    };
                                    readonly required: readonly ["id", "value", "object"];
                                    readonly type: "object";
                                };
                                readonly type: "array";
                            };
                        };
                        readonly required: readonly ["id", "displayName", "tags", "gender", "category", "created", "phoneNumbers", "emailAddresses", "customFields", "appURL", "apiURL", "hasAccount", "hasPendingInvite", "customContactFields", "organizationContactFields", "canDelete", "canEdit", "integrationLinks", "object", "internalMemberIds"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly hasMore: {
                    readonly type: "boolean";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                };
                readonly totalCount: {
                    readonly format: "int32";
                    readonly type: "integer";
                    readonly examples: readonly [750];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
                readonly totalCountRelation: {
                    readonly description: "The relation to use when comparing the total number of available search to the value specified in the results count field.\nA value of `gte` means that the count is a lower bound of the total results that match the query and a value of `eq` indicates that the count is accurate.\n\n`eq` `gte`";
                    readonly enum: readonly ["eq", "gte"];
                    readonly type: "string";
                    readonly examples: readonly ["equal"];
                };
            };
            readonly required: readonly ["totalCount", "totalCountRelation", "contacts", "hasMore"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SendInvite: {
    readonly body: {
        readonly properties: {
            readonly customMessage: {
                readonly description: "The message to send to the invitee.";
                readonly type: "string";
                readonly examples: readonly ["You've been invited to securely message with our clinic."];
            };
            readonly destinationId: {
                readonly description: "The id of the phone number or email to send the invite to.";
                readonly type: "string";
                readonly examples: readonly ["entityContact_0D4QABCC06000"];
            };
            readonly internalEndpointId: {
                readonly description: "Organization's internal secure endpoint that will be used to send the invite.";
                readonly type: "string";
                readonly examples: readonly ["organizationCode_2ER39ETHBQ800"];
            };
        };
        readonly required: readonly ["internalEndpointId", "destinationId"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contactId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the contact to invite.";
                };
            };
            readonly required: readonly ["contactId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly contact: {
                    readonly properties: {
                        readonly apiURL: {
                            readonly description: "An absolute URL for fetching this contact from the API";
                            readonly format: "url";
                            readonly type: "string";
                            readonly examples: readonly ["https://api.sprucehealth.com/contact/entity_0E5QDGJC03000"];
                        };
                        readonly appURL: {
                            readonly description: "An absolute URL to view the contact in the Spruce app";
                            readonly format: "url";
                            readonly type: "string";
                            readonly examples: readonly ["https://app.sprucehealth.com/org/entity_0D4QABCC06000/contact/entity_0E5QDGJC03000"];
                        };
                        readonly canDelete: {
                            readonly description: "Whether the contact may be deleted.";
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                        readonly canEdit: {
                            readonly description: "Whether the contact may be edited.";
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                        readonly category: {
                            readonly enum: readonly ["patient", "professional", "clinic", "unknown"];
                            readonly type: "string";
                            readonly examples: readonly ["patient"];
                            readonly description: "`patient` `professional` `clinic` `unknown`";
                        };
                        readonly companyName: {
                            readonly description: "The contact's company. This field can also be used to specify the name of a non-patient contact, such as another healthcare facility.";
                            readonly type: "string";
                            readonly examples: readonly ["Walgreens"];
                        };
                        readonly created: {
                            readonly description: "The date this contact was added to Spruce";
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly examples: readonly ["2021-01-30T08:30:00Z"];
                        };
                        readonly customContactFields: {
                            readonly description: "Fields on a contact that are custom";
                            readonly items: {
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "Spruce's contact contact custom field ID";
                                        readonly type: "string";
                                        readonly examples: readonly ["entityCustomField_0E5QDGJC03000"];
                                    };
                                    readonly name: {
                                        readonly description: "A name for the field";
                                        readonly type: "string";
                                        readonly examples: readonly ["Preferred Pharmacy"];
                                    };
                                    readonly value: {
                                        readonly description: "The value of the field";
                                        readonly type: "string";
                                        readonly examples: readonly ["CVS"];
                                    };
                                };
                                readonly required: readonly ["id", "name", "value"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                        readonly dateOfBirth: {
                            readonly description: "The contact's date of birth in the format YYYY-MM-DD.";
                            readonly format: "date";
                            readonly type: "string";
                            readonly examples: readonly ["2000-01-30"];
                        };
                        readonly displayName: {
                            readonly description: "The contact's full name for easy display to a user. This is determined by combining the givenName, middleName, and familyName, or if those are all empty, falling back to companyName, phone number or email address.";
                            readonly type: "string";
                            readonly examples: readonly ["Joe William Smith"];
                        };
                        readonly emailAddresses: {
                            readonly items: {
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "Spruce's phone number ID";
                                        readonly format: "string";
                                        readonly type: "string";
                                        readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                                    };
                                    readonly label: {
                                        readonly description: "A label for the email address such as 'Work', 'Home', etc.";
                                        readonly type: "string";
                                        readonly examples: readonly ["Work"];
                                    };
                                    readonly value: {
                                        readonly format: "email";
                                        readonly type: "string";
                                        readonly examples: readonly ["contact@example.com"];
                                    };
                                };
                                readonly required: readonly ["id", "value"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                        readonly familyName: {
                            readonly description: "The contact's family name (typically last name in US)";
                            readonly type: "string";
                            readonly examples: readonly ["Smith"];
                        };
                        readonly faxNumbers: {
                            readonly items: {
                                readonly properties: {
                                    readonly displayValue: {
                                        readonly description: "The contact phone number in an easily readable format.";
                                        readonly type: "string";
                                        readonly examples: readonly ["(222) 555-0000"];
                                    };
                                    readonly id: {
                                        readonly description: "Spruce's phone number ID";
                                        readonly format: "string";
                                        readonly type: "string";
                                        readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                                    };
                                    readonly label: {
                                        readonly description: "A label for the phone number such as 'Work', 'Home', 'Cell', etc.";
                                        readonly type: "string";
                                        readonly examples: readonly ["Work"];
                                    };
                                    readonly value: {
                                        readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                                        readonly format: "string";
                                        readonly type: "string";
                                        readonly examples: readonly [12225550000];
                                    };
                                };
                                readonly required: readonly ["id", "value", "displayValue"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                        readonly gender: {
                            readonly enum: readonly ["unknown", "male", "female", "other"];
                            readonly type: "string";
                            readonly examples: readonly ["unknown"];
                            readonly description: "`unknown` `male` `female` `other`";
                        };
                        readonly genderDetail: {
                            readonly description: "Optional free-text details for gender";
                            readonly type: "string";
                            readonly examples: readonly ["Non-binary"];
                        };
                        readonly givenName: {
                            readonly description: "The contact's given name (typically first name in US)";
                            readonly type: "string";
                            readonly examples: readonly ["Joe"];
                        };
                        readonly hasAccount: {
                            readonly description: "Whether the contact has created a Spruce account for secure messaging, video calling, etc.";
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                        readonly hasPendingInvite: {
                            readonly description: "Whether the contact has a pending Spruce account invitation";
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                        readonly id: {
                            readonly description: "Spruce's contact ID";
                            readonly type: "string";
                            readonly examples: readonly ["entity_0E5QDGJC03000"];
                        };
                        readonly integrationLinks: {
                            readonly description: "Links between a contact and an integrated external system.";
                            readonly items: {
                                readonly properties: {
                                    readonly contactId: {
                                        readonly description: "Spruce's contact ID";
                                        readonly type: "string";
                                        readonly examples: readonly ["entity_0E5QDGJC03000"];
                                    };
                                    readonly externalId: {
                                        readonly description: "The id of a contact in an external system.";
                                        readonly type: "string";
                                        readonly examples: readonly ["elation_140797386655555"];
                                    };
                                    readonly type: {
                                        readonly enum: readonly ["elation", "hint", "athena", "custom"];
                                        readonly type: "string";
                                        readonly examples: readonly ["elation"];
                                        readonly description: "`elation` `hint` `athena` `custom`";
                                    };
                                    readonly url: {
                                        readonly description: "The url of a contact in an integrated external system.";
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["type", "externalId", "contactId"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                        readonly internalMemberIds: {
                            readonly description: "The ids of the teammates, teams and/or your organization that are members of the contact. Contact Membership must be enabled for the organization for this field to be interacted with.";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly type: "array";
                        };
                        readonly middleName: {
                            readonly description: "The contact's middle name";
                            readonly type: "string";
                            readonly examples: readonly ["William"];
                        };
                        readonly object: {
                            readonly description: "String representing the object's type";
                            readonly type: "string";
                        };
                        readonly organizationContactFields: {
                            readonly description: "Fields on a contact that are custom";
                            readonly items: {
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "Spruce's contact organization contact custom field ID";
                                        readonly type: "string";
                                        readonly examples: readonly ["managedCustomField_0E5QDGJC03000"];
                                    };
                                    readonly name: {
                                        readonly description: "A name for the field";
                                        readonly type: "string";
                                        readonly examples: readonly ["Preferred Pharmacy"];
                                    };
                                    readonly value: {
                                        readonly description: "The value of the field";
                                        readonly type: "string";
                                        readonly examples: readonly ["CVS"];
                                    };
                                };
                                readonly required: readonly ["id", "name", "value"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                        readonly phoneNumbers: {
                            readonly items: {
                                readonly properties: {
                                    readonly displayValue: {
                                        readonly description: "The contact phone number in an easily readable format.";
                                        readonly type: "string";
                                        readonly examples: readonly ["(222) 555-0000"];
                                    };
                                    readonly id: {
                                        readonly description: "Spruce's phone number ID";
                                        readonly format: "string";
                                        readonly type: "string";
                                        readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                                    };
                                    readonly label: {
                                        readonly description: "A label for the phone number such as 'Work', 'Home', 'Cell', etc.";
                                        readonly type: "string";
                                        readonly examples: readonly ["Work"];
                                    };
                                    readonly value: {
                                        readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                                        readonly format: "string";
                                        readonly type: "string";
                                        readonly examples: readonly [12225550000];
                                    };
                                };
                                readonly required: readonly ["id", "value", "displayValue"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                        readonly pronouns: {
                            readonly description: "The contact's pronouns";
                            readonly type: "string";
                            readonly examples: readonly ["he/him"];
                        };
                        readonly tags: {
                            readonly items: {
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "Spruce's contact tag ID";
                                        readonly type: "string";
                                        readonly examples: readonly ["tag_0E5QDGJC03000"];
                                    };
                                    readonly object: {
                                        readonly description: "String representing the object's type";
                                        readonly type: "string";
                                    };
                                    readonly value: {
                                        readonly description: "The text value of a contact tag";
                                        readonly type: "string";
                                        readonly examples: readonly ["Smith"];
                                    };
                                };
                                readonly required: readonly ["id", "value", "object"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                    };
                    readonly required: readonly ["id", "displayName", "tags", "gender", "category", "created", "phoneNumbers", "emailAddresses", "customFields", "appURL", "apiURL", "hasAccount", "hasPendingInvite", "customContactFields", "organizationContactFields", "canDelete", "canEdit", "integrationLinks", "object", "internalMemberIds"];
                    readonly type: "object";
                };
                readonly conversation: {
                    readonly properties: {
                        readonly apiURL: {
                            readonly description: "An absolute URL for fetching this conversation from the API";
                            readonly format: "url";
                            readonly type: "string";
                            readonly examples: readonly ["https://api.sprucehealth.com/conversations/t_0E5QDJJC03000"];
                        };
                        readonly appURL: {
                            readonly description: "An absolute URL to view the conversation in the Spruce app";
                            readonly format: "url";
                            readonly type: "string";
                            readonly examples: readonly ["https://app.sprucehealth.com/org/entity_0D4QABCC06000/thread/t_0E5QDJJC03000"];
                        };
                        readonly archived: {
                            readonly description: "Whether or not the conversation is archived";
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly assignedToMemberId: {
                            readonly description: "The id of the teammate the conversation is assigned to";
                            readonly type: "string";
                            readonly examples: readonly ["entity_0D4QABCC06000"];
                        };
                        readonly associatedContactIds: {
                            readonly description: "The ids of the contacts associated with the conversation. This may include contacts that are not a part of the conversation. For example, the conversation may be with parents, but associated with a contact representing their child.";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly type: "array";
                            readonly examples: readonly ["entity_0D4QABCC06000"];
                        };
                        readonly createdAt: {
                            readonly description: "The date the conversation was created";
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly examples: readonly ["2020-04-01T00:00:00Z"];
                        };
                        readonly externalParticipants: {
                            readonly description: "The external participants in the conversation.";
                            readonly items: {
                                readonly properties: {
                                    readonly contact: {
                                        readonly description: "The id of the contact associated with the participant. This will be omitted if the participant is not a saved contact.";
                                        readonly type: "string";
                                        readonly examples: readonly ["entity_0D4QABCC06000"];
                                    };
                                    readonly displayName: {
                                        readonly description: "The display name of the participant";
                                        readonly type: "string";
                                        readonly examples: readonly ["555-555-5555", "John Doe", "patient@example.com"];
                                    };
                                    readonly endpoint: {
                                        readonly description: "The endpoint of the participant, such as their phone number or email address. For secure conversations, there will not be an endpoint.";
                                        readonly properties: {
                                            readonly channel: {
                                                readonly description: "The channel of the endpoint (e.g. 'email', 'phone', 'fax', etc.). More endpoint channels may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `fax` `secure`";
                                                readonly enum: readonly ["email", "phone", "fax", "secure"];
                                                readonly type: "string";
                                            };
                                            readonly displayValue: {
                                                readonly description: "The display value of the endpoint. This is the value that should be displayed to the user when showing the endpoint, along with the label if it's populated.";
                                                readonly type: "string";
                                            };
                                            readonly id: {
                                                readonly description: "The id of the endpoint";
                                                readonly type: "string";
                                                readonly examples: readonly [15555555555];
                                            };
                                            readonly isInternal: {
                                                readonly description: "Internal endpoints are endpoints that are owned by your organization, such as your organization's Spruce Phone Numbers or Spruce Links.";
                                                readonly type: "boolean";
                                                readonly examples: readonly [false];
                                            };
                                            readonly label: {
                                                readonly description: "The optional label of the endpoint";
                                                readonly type: "string";
                                                readonly examples: readonly ["Home", "Work"];
                                            };
                                            readonly object: {
                                                readonly description: "String representing the object's type";
                                                readonly type: "string";
                                            };
                                            readonly rawValue: {
                                                readonly description: "The raw value of the endpoint. This can be used for programmatically comparing contact values. The raw value for a phone/fax number will be in E164 format.";
                                                readonly type: "string";
                                            };
                                        };
                                        readonly required: readonly ["id", "channel", "displayValue", "rawValue", "isInternal", "object"];
                                        readonly type: "object";
                                    };
                                };
                                readonly required: readonly ["displayName"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                        readonly id: {
                            readonly description: "Spruce's conversation ID";
                            readonly type: "string";
                            readonly examples: readonly ["t_0E5QDGJC03000"];
                        };
                        readonly internalEndpoint: {
                            readonly description: "The internal endpoint of the conversation. For secure conversations, this will be a Spruce Link.";
                            readonly properties: {
                                readonly channel: {
                                    readonly description: "The channel of the endpoint (e.g. 'email', 'phone', 'fax', etc.). More endpoint channels may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `fax` `secure`";
                                    readonly enum: readonly ["email", "phone", "fax", "secure"];
                                    readonly type: "string";
                                };
                                readonly displayValue: {
                                    readonly description: "The display value of the endpoint. This is the value that should be displayed to the user when showing the endpoint, along with the label if it's populated.";
                                    readonly type: "string";
                                };
                                readonly id: {
                                    readonly description: "The id of the endpoint";
                                    readonly type: "string";
                                    readonly examples: readonly [15555555555];
                                };
                                readonly isInternal: {
                                    readonly description: "Internal endpoints are endpoints that are owned by your organization, such as your organization's Spruce Phone Numbers or Spruce Links.";
                                    readonly type: "boolean";
                                    readonly examples: readonly [false];
                                };
                                readonly label: {
                                    readonly description: "The optional label of the endpoint";
                                    readonly type: "string";
                                    readonly examples: readonly ["Home", "Work"];
                                };
                                readonly object: {
                                    readonly description: "String representing the object's type";
                                    readonly type: "string";
                                };
                                readonly rawValue: {
                                    readonly description: "The raw value of the endpoint. This can be used for programmatically comparing contact values. The raw value for a phone/fax number will be in E164 format.";
                                    readonly type: "string";
                                };
                            };
                            readonly required: readonly ["id", "channel", "displayValue", "rawValue", "isInternal", "object"];
                            readonly type: "object";
                        };
                        readonly internalMemberIds: {
                            readonly description: "The ids of the teammates, teams and/or your organization that are members of the conversation.";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly type: "array";
                            readonly examples: readonly ["entity_0D4QABCC06000"];
                        };
                        readonly isReadOnly: {
                            readonly description: "If the conversation is read-only, messages cannot be sent to it.";
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly lastMessageAt: {
                            readonly description: "The time of the conversations latest message";
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly examples: readonly ["2020-04-01T00:00:00Z"];
                        };
                        readonly object: {
                            readonly description: "String representing the object's type";
                            readonly type: "string";
                        };
                        readonly subtitle: {
                            readonly description: "The subtitle of the conversation";
                            readonly type: "string";
                            readonly examples: readonly ["Billing"];
                        };
                        readonly tags: {
                            readonly items: {
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "Spruce's conversation tag ID";
                                        readonly type: "string";
                                        readonly examples: readonly ["tag_0E5QDGJC03000"];
                                    };
                                    readonly object: {
                                        readonly description: "String representing the object's type";
                                        readonly type: "string";
                                    };
                                    readonly value: {
                                        readonly description: "The text value of a conversation tag";
                                        readonly type: "string";
                                        readonly examples: readonly ["Smith"];
                                    };
                                };
                                readonly required: readonly ["id", "value", "object"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                        readonly title: {
                            readonly description: "The title of the conversation";
                            readonly type: "string";
                            readonly examples: readonly ["John Doe"];
                        };
                        readonly type: {
                            readonly description: "The type of the conversation (e.g. 'email', 'phone', 'secure', etc.). Note that SMS will be in a 'phone' conversation, and video calls will be in a 'secure' conversation. More conversation types may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `secure` `fax` `team` `note` `other`";
                            readonly enum: readonly ["email", "phone", "secure", "fax", "team", "note", "other"];
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["appURL", "apiURL", "archived", "createdAt", "id", "isReadOnly", "tags", "type", "title", "object"];
                    readonly type: "object";
                };
            };
            readonly required: readonly ["contact", "conversation"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TeamMembers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly teamId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The unique identifier of the team";
                };
            };
            readonly required: readonly ["teamId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly pageSize: {
                    readonly format: "int32";
                    readonly maximum: 500;
                    readonly minimum: 1;
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "How many member to return at one time";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly hasMore: {
                    readonly type: "boolean";
                };
                readonly members: {
                    readonly items: {
                        readonly anyOf: readonly [{
                            readonly properties: {
                                readonly displayName: {
                                    readonly description: "The full name of the teammate, including any title provided";
                                    readonly type: "string";
                                    readonly examples: readonly ["John Doe, MD"];
                                };
                                readonly email: {
                                    readonly description: "The email address of the teammate";
                                    readonly format: "email";
                                    readonly type: "string";
                                    readonly examples: readonly ["provider@example.com"];
                                };
                                readonly id: {
                                    readonly description: "The id of the teammate";
                                    readonly type: "string";
                                    readonly examples: readonly ["entity_0E5QDGJC03000"];
                                };
                                readonly isAdmin: {
                                    readonly description: "Whether or not the teammate is an admin on Spruce";
                                    readonly type: "boolean";
                                    readonly examples: readonly [false];
                                };
                                readonly object: {
                                    readonly description: "String representing the object's type";
                                    readonly type: "string";
                                };
                                readonly type: {
                                    readonly description: "This will always be 'teammate'. This is provided for cases where a teammate may be in a mixed list with teams and/or your organization.";
                                    readonly type: "string";
                                    readonly examples: readonly ["teammate"];
                                };
                            };
                            readonly required: readonly ["id", "displayName", "isAdmin", "type", "object"];
                            readonly type: "object";
                        }, {
                            readonly properties: {
                                readonly id: {
                                    readonly description: "The id of the team";
                                    readonly type: "string";
                                    readonly examples: readonly ["entity_0D4QABCC06000"];
                                };
                                readonly name: {
                                    readonly description: "The name of the team";
                                    readonly type: "string";
                                    readonly examples: readonly ["Billing Team"];
                                };
                                readonly object: {
                                    readonly description: "String representing the object's type";
                                    readonly type: "string";
                                };
                                readonly type: {
                                    readonly description: "This will always be 'team'. This is provided for cases where a team may be in a mixed list with teammtes and/or your organization.";
                                    readonly type: "string";
                                    readonly examples: readonly ["team"];
                                };
                            };
                            readonly required: readonly ["id", "name", "type", "object"];
                            readonly type: "object";
                        }, {
                            readonly properties: {
                                readonly id: {
                                    readonly description: "The id of the organization";
                                    readonly type: "string";
                                    readonly examples: readonly ["entity_0D4QABCC06000"];
                                };
                                readonly name: {
                                    readonly description: "The name of the organization";
                                    readonly type: "string";
                                    readonly examples: readonly ["Spruce Health"];
                                };
                                readonly object: {
                                    readonly description: "String representing the object's type";
                                    readonly type: "string";
                                };
                                readonly type: {
                                    readonly description: "This will always be 'organization'. This is provided for cases where a organization may be in a mixed list with teammtes and/or teams.";
                                    readonly type: "string";
                                    readonly examples: readonly ["organization"];
                                };
                            };
                            readonly required: readonly ["id", "name", "type", "object"];
                            readonly type: "object";
                        }];
                    };
                    readonly type: "array";
                };
                readonly paginationToken: {
                    readonly description: "Token given in a previous response to allow requesting the next page";
                    readonly type: "string";
                    readonly examples: readonly ["abcdefghijklmnop"];
                };
                readonly totalCount: {
                    readonly format: "int32";
                    readonly type: "integer";
                    readonly examples: readonly [750];
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                };
            };
            readonly required: readonly ["members", "totalCount", "hasMore"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateContact: {
    readonly body: {
        readonly description: "Contact json object. Omitted fields are not updated.";
        readonly properties: {
            readonly category: {
                readonly enum: readonly ["patient", "professional"];
                readonly type: "string";
                readonly examples: readonly ["patient"];
            };
            readonly companyName: {
                readonly description: "The contact's company. This field can also be used to specify the name of a non-patient contact, such as another healthcare facility.";
                readonly type: "string";
                readonly examples: readonly ["Walgreens"];
            };
            readonly dateOfBirth: {
                readonly description: "The contact's date of birth in the format YYYY-MM-DD.";
                readonly format: "date";
                readonly type: "string";
                readonly examples: readonly ["2000-01-30"];
            };
            readonly emailAddresses: {
                readonly items: {
                    readonly properties: {
                        readonly label: {
                            readonly description: "A label for the email address such as 'Work', 'Home', etc.";
                            readonly type: "string";
                            readonly examples: readonly ["Work"];
                        };
                        readonly value: {
                            readonly format: "email";
                            readonly type: "string";
                            readonly examples: readonly ["contact@example.com"];
                        };
                    };
                    readonly required: readonly ["value"];
                    readonly type: "object";
                };
                readonly type: "array";
            };
            readonly familyName: {
                readonly description: "The contact's family name (typically last name in US)";
                readonly type: "string";
                readonly examples: readonly ["Smith"];
            };
            readonly faxNumbers: {
                readonly items: {
                    readonly properties: {
                        readonly label: {
                            readonly description: "A label for the phone number such as 'Work', 'Home', 'Cell', etc.";
                            readonly type: "string";
                            readonly examples: readonly ["Work"];
                        };
                        readonly value: {
                            readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                            readonly format: "string";
                            readonly type: "string";
                            readonly examples: readonly [12225550000];
                        };
                    };
                    readonly required: readonly ["value"];
                    readonly type: "object";
                };
                readonly type: "array";
            };
            readonly gender: {
                readonly enum: readonly ["unknown", "male", "female", "other"];
                readonly type: "string";
                readonly examples: readonly ["unknown"];
            };
            readonly genderDetail: {
                readonly description: "Optional free-text details for gender";
                readonly type: "string";
                readonly examples: readonly ["Non-binary"];
            };
            readonly givenName: {
                readonly description: "The contact's given name (typically first name in US)";
                readonly type: "string";
                readonly examples: readonly ["Joe"];
            };
            readonly internalMemberIds: {
                readonly description: "The ids of the teammates, teams and/or your organization that are members of the contact. Contact Membership must be enabled for the organization for this field to be interacted with.";
                readonly items: {
                    readonly type: "string";
                };
                readonly type: "array";
            };
            readonly middleName: {
                readonly description: "The contact's middle name";
                readonly type: "string";
                readonly examples: readonly ["William"];
            };
            readonly organizationContactFields: {
                readonly description: "Fields on a contact that are custom to your organization";
                readonly items: {
                    readonly properties: {
                        readonly id: {
                            readonly description: "Spruce's contact organization contact custom field ID";
                            readonly type: "string";
                            readonly examples: readonly ["managedCustomField_0E5QDGJC03000"];
                        };
                        readonly value: {
                            readonly description: "The value of the field";
                            readonly type: "string";
                            readonly examples: readonly ["CVS"];
                        };
                    };
                    readonly required: readonly ["id", "value"];
                    readonly type: "object";
                };
                readonly type: "array";
            };
            readonly phoneNumbers: {
                readonly items: {
                    readonly properties: {
                        readonly label: {
                            readonly description: "A label for the phone number such as 'Work', 'Home', 'Cell', etc.";
                            readonly type: "string";
                            readonly examples: readonly ["Work"];
                        };
                        readonly value: {
                            readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                            readonly format: "string";
                            readonly type: "string";
                            readonly examples: readonly [12225550000];
                        };
                    };
                    readonly required: readonly ["value"];
                    readonly type: "object";
                };
                readonly type: "array";
            };
            readonly pronouns: {
                readonly description: "The contact's pronouns";
                readonly type: "string";
                readonly examples: readonly ["he/him"];
            };
            readonly tagIds: {
                readonly description: "An array of Spruce contact tag ids";
                readonly items: {
                    readonly description: "Spruce's contact tag ID";
                    readonly type: "string";
                    readonly examples: readonly ["tag_0E5QDGJC03000"];
                };
                readonly type: "array";
            };
        };
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly contactId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the contact to update";
                };
            };
            readonly required: readonly ["contactId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "s-idempotency-key": {
                    readonly type: "string";
                    readonly examples: readonly ["S7uiKYMMRzAcuG8S"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique value generated by the client used to recognize subsequent retries of the same request. Idempotency keys can be up to 255 characters long.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly apiURL: {
                    readonly description: "An absolute URL for fetching this contact from the API";
                    readonly format: "url";
                    readonly type: "string";
                    readonly examples: readonly ["https://api.sprucehealth.com/contact/entity_0E5QDGJC03000"];
                };
                readonly appURL: {
                    readonly description: "An absolute URL to view the contact in the Spruce app";
                    readonly format: "url";
                    readonly type: "string";
                    readonly examples: readonly ["https://app.sprucehealth.com/org/entity_0D4QABCC06000/contact/entity_0E5QDGJC03000"];
                };
                readonly canDelete: {
                    readonly description: "Whether the contact may be deleted.";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly canEdit: {
                    readonly description: "Whether the contact may be edited.";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly category: {
                    readonly enum: readonly ["patient", "professional", "clinic", "unknown"];
                    readonly type: "string";
                    readonly examples: readonly ["patient"];
                    readonly description: "`patient` `professional` `clinic` `unknown`";
                };
                readonly companyName: {
                    readonly description: "The contact's company. This field can also be used to specify the name of a non-patient contact, such as another healthcare facility.";
                    readonly type: "string";
                    readonly examples: readonly ["Walgreens"];
                };
                readonly created: {
                    readonly description: "The date this contact was added to Spruce";
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2021-01-30T08:30:00Z"];
                };
                readonly customContactFields: {
                    readonly description: "Fields on a contact that are custom";
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly description: "Spruce's contact contact custom field ID";
                                readonly type: "string";
                                readonly examples: readonly ["entityCustomField_0E5QDGJC03000"];
                            };
                            readonly name: {
                                readonly description: "A name for the field";
                                readonly type: "string";
                                readonly examples: readonly ["Preferred Pharmacy"];
                            };
                            readonly value: {
                                readonly description: "The value of the field";
                                readonly type: "string";
                                readonly examples: readonly ["CVS"];
                            };
                        };
                        readonly required: readonly ["id", "name", "value"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly dateOfBirth: {
                    readonly description: "The contact's date of birth in the format YYYY-MM-DD.";
                    readonly format: "date";
                    readonly type: "string";
                    readonly examples: readonly ["2000-01-30"];
                };
                readonly displayName: {
                    readonly description: "The contact's full name for easy display to a user. This is determined by combining the givenName, middleName, and familyName, or if those are all empty, falling back to companyName, phone number or email address.";
                    readonly type: "string";
                    readonly examples: readonly ["Joe William Smith"];
                };
                readonly emailAddresses: {
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly description: "Spruce's phone number ID";
                                readonly format: "string";
                                readonly type: "string";
                                readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                            };
                            readonly label: {
                                readonly description: "A label for the email address such as 'Work', 'Home', etc.";
                                readonly type: "string";
                                readonly examples: readonly ["Work"];
                            };
                            readonly value: {
                                readonly format: "email";
                                readonly type: "string";
                                readonly examples: readonly ["contact@example.com"];
                            };
                        };
                        readonly required: readonly ["id", "value"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly familyName: {
                    readonly description: "The contact's family name (typically last name in US)";
                    readonly type: "string";
                    readonly examples: readonly ["Smith"];
                };
                readonly faxNumbers: {
                    readonly items: {
                        readonly properties: {
                            readonly displayValue: {
                                readonly description: "The contact phone number in an easily readable format.";
                                readonly type: "string";
                                readonly examples: readonly ["(222) 555-0000"];
                            };
                            readonly id: {
                                readonly description: "Spruce's phone number ID";
                                readonly format: "string";
                                readonly type: "string";
                                readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                            };
                            readonly label: {
                                readonly description: "A label for the phone number such as 'Work', 'Home', 'Cell', etc.";
                                readonly type: "string";
                                readonly examples: readonly ["Work"];
                            };
                            readonly value: {
                                readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                                readonly format: "string";
                                readonly type: "string";
                                readonly examples: readonly [12225550000];
                            };
                        };
                        readonly required: readonly ["id", "value", "displayValue"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly gender: {
                    readonly enum: readonly ["unknown", "male", "female", "other"];
                    readonly type: "string";
                    readonly examples: readonly ["unknown"];
                    readonly description: "`unknown` `male` `female` `other`";
                };
                readonly genderDetail: {
                    readonly description: "Optional free-text details for gender";
                    readonly type: "string";
                    readonly examples: readonly ["Non-binary"];
                };
                readonly givenName: {
                    readonly description: "The contact's given name (typically first name in US)";
                    readonly type: "string";
                    readonly examples: readonly ["Joe"];
                };
                readonly hasAccount: {
                    readonly description: "Whether the contact has created a Spruce account for secure messaging, video calling, etc.";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly hasPendingInvite: {
                    readonly description: "Whether the contact has a pending Spruce account invitation";
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly id: {
                    readonly description: "Spruce's contact ID";
                    readonly type: "string";
                    readonly examples: readonly ["entity_0E5QDGJC03000"];
                };
                readonly integrationLinks: {
                    readonly description: "Links between a contact and an integrated external system.";
                    readonly items: {
                        readonly properties: {
                            readonly contactId: {
                                readonly description: "Spruce's contact ID";
                                readonly type: "string";
                                readonly examples: readonly ["entity_0E5QDGJC03000"];
                            };
                            readonly externalId: {
                                readonly description: "The id of a contact in an external system.";
                                readonly type: "string";
                                readonly examples: readonly ["elation_140797386655555"];
                            };
                            readonly type: {
                                readonly enum: readonly ["elation", "hint", "athena", "custom"];
                                readonly type: "string";
                                readonly examples: readonly ["elation"];
                                readonly description: "`elation` `hint` `athena` `custom`";
                            };
                            readonly url: {
                                readonly description: "The url of a contact in an integrated external system.";
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["type", "externalId", "contactId"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly internalMemberIds: {
                    readonly description: "The ids of the teammates, teams and/or your organization that are members of the contact. Contact Membership must be enabled for the organization for this field to be interacted with.";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly type: "array";
                };
                readonly middleName: {
                    readonly description: "The contact's middle name";
                    readonly type: "string";
                    readonly examples: readonly ["William"];
                };
                readonly object: {
                    readonly description: "String representing the object's type";
                    readonly type: "string";
                };
                readonly organizationContactFields: {
                    readonly description: "Fields on a contact that are custom";
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly description: "Spruce's contact organization contact custom field ID";
                                readonly type: "string";
                                readonly examples: readonly ["managedCustomField_0E5QDGJC03000"];
                            };
                            readonly name: {
                                readonly description: "A name for the field";
                                readonly type: "string";
                                readonly examples: readonly ["Preferred Pharmacy"];
                            };
                            readonly value: {
                                readonly description: "The value of the field";
                                readonly type: "string";
                                readonly examples: readonly ["CVS"];
                            };
                        };
                        readonly required: readonly ["id", "name", "value"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly phoneNumbers: {
                    readonly items: {
                        readonly properties: {
                            readonly displayValue: {
                                readonly description: "The contact phone number in an easily readable format.";
                                readonly type: "string";
                                readonly examples: readonly ["(222) 555-0000"];
                            };
                            readonly id: {
                                readonly description: "Spruce's phone number ID";
                                readonly format: "string";
                                readonly type: "string";
                                readonly examples: readonly ["entityContact_26RRC7PQ6JG00"];
                            };
                            readonly label: {
                                readonly description: "A label for the phone number such as 'Work', 'Home', 'Cell', etc.";
                                readonly type: "string";
                                readonly examples: readonly ["Work"];
                            };
                            readonly value: {
                                readonly description: "The contact phone number. An acceptable phone number is in the format 2065551234, +12065551234, (206) 555-1234, or 206-555-1234.";
                                readonly format: "string";
                                readonly type: "string";
                                readonly examples: readonly [12225550000];
                            };
                        };
                        readonly required: readonly ["id", "value", "displayValue"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly pronouns: {
                    readonly description: "The contact's pronouns";
                    readonly type: "string";
                    readonly examples: readonly ["he/him"];
                };
                readonly tags: {
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly description: "Spruce's contact tag ID";
                                readonly type: "string";
                                readonly examples: readonly ["tag_0E5QDGJC03000"];
                            };
                            readonly object: {
                                readonly description: "String representing the object's type";
                                readonly type: "string";
                            };
                            readonly value: {
                                readonly description: "The text value of a contact tag";
                                readonly type: "string";
                                readonly examples: readonly ["Smith"];
                            };
                        };
                        readonly required: readonly ["id", "value", "object"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
            };
            readonly required: readonly ["id", "displayName", "tags", "gender", "category", "created", "phoneNumbers", "emailAddresses", "customFields", "appURL", "apiURL", "hasAccount", "hasPendingInvite", "customContactFields", "organizationContactFields", "canDelete", "canEdit", "integrationLinks", "object", "internalMemberIds"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateConversation: {
    readonly body: {
        readonly description: "Conversation json object. Omitted fields are not updated.";
        readonly properties: {
            readonly archived: {
                readonly description: "Whether the conversation should be archived (true) or unarchived (false)";
                readonly type: "boolean";
            };
            readonly assignToMemberId: {
                readonly description: "The id of a team or teammate to assign the conversation to. If the specified teammate or team is not a member of the conversation, they will be added as a member.";
                readonly type: "string";
                readonly examples: readonly ["entity_0D4QABCC06000"];
            };
            readonly tagIds: {
                readonly description: "An array of Spruce conversation tag ids";
                readonly items: {
                    readonly description: "Spruce's conversation tag ID";
                    readonly type: "string";
                    readonly examples: readonly ["tag_0E5QDGJC03000"];
                };
                readonly type: "array";
            };
        };
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly conversationId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the conversation to update";
                };
            };
            readonly required: readonly ["conversationId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "s-idempotency-key": {
                    readonly type: "string";
                    readonly examples: readonly ["S7uiKYMMRzAcuG8S"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A unique value generated by the client used to recognize subsequent retries of the same request. Idempotency keys can be up to 255 characters long.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly apiURL: {
                    readonly description: "An absolute URL for fetching this conversation from the API";
                    readonly format: "url";
                    readonly type: "string";
                    readonly examples: readonly ["https://api.sprucehealth.com/conversations/t_0E5QDJJC03000"];
                };
                readonly appURL: {
                    readonly description: "An absolute URL to view the conversation in the Spruce app";
                    readonly format: "url";
                    readonly type: "string";
                    readonly examples: readonly ["https://app.sprucehealth.com/org/entity_0D4QABCC06000/thread/t_0E5QDJJC03000"];
                };
                readonly archived: {
                    readonly description: "Whether or not the conversation is archived";
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly assignedToMemberId: {
                    readonly description: "The id of the teammate the conversation is assigned to";
                    readonly type: "string";
                    readonly examples: readonly ["entity_0D4QABCC06000"];
                };
                readonly associatedContactIds: {
                    readonly description: "The ids of the contacts associated with the conversation. This may include contacts that are not a part of the conversation. For example, the conversation may be with parents, but associated with a contact representing their child.";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly type: "array";
                    readonly examples: readonly ["entity_0D4QABCC06000"];
                };
                readonly createdAt: {
                    readonly description: "The date the conversation was created";
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2020-04-01T00:00:00Z"];
                };
                readonly externalParticipants: {
                    readonly description: "The external participants in the conversation.";
                    readonly items: {
                        readonly properties: {
                            readonly contact: {
                                readonly description: "The id of the contact associated with the participant. This will be omitted if the participant is not a saved contact.";
                                readonly type: "string";
                                readonly examples: readonly ["entity_0D4QABCC06000"];
                            };
                            readonly displayName: {
                                readonly description: "The display name of the participant";
                                readonly type: "string";
                                readonly examples: readonly ["555-555-5555", "John Doe", "patient@example.com"];
                            };
                            readonly endpoint: {
                                readonly description: "The endpoint of the participant, such as their phone number or email address. For secure conversations, there will not be an endpoint.";
                                readonly properties: {
                                    readonly channel: {
                                        readonly description: "The channel of the endpoint (e.g. 'email', 'phone', 'fax', etc.). More endpoint channels may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `fax` `secure`";
                                        readonly enum: readonly ["email", "phone", "fax", "secure"];
                                        readonly type: "string";
                                    };
                                    readonly displayValue: {
                                        readonly description: "The display value of the endpoint. This is the value that should be displayed to the user when showing the endpoint, along with the label if it's populated.";
                                        readonly type: "string";
                                    };
                                    readonly id: {
                                        readonly description: "The id of the endpoint";
                                        readonly type: "string";
                                        readonly examples: readonly [15555555555];
                                    };
                                    readonly isInternal: {
                                        readonly description: "Internal endpoints are endpoints that are owned by your organization, such as your organization's Spruce Phone Numbers or Spruce Links.";
                                        readonly type: "boolean";
                                        readonly examples: readonly [false];
                                    };
                                    readonly label: {
                                        readonly description: "The optional label of the endpoint";
                                        readonly type: "string";
                                        readonly examples: readonly ["Home", "Work"];
                                    };
                                    readonly object: {
                                        readonly description: "String representing the object's type";
                                        readonly type: "string";
                                    };
                                    readonly rawValue: {
                                        readonly description: "The raw value of the endpoint. This can be used for programmatically comparing contact values. The raw value for a phone/fax number will be in E164 format.";
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["id", "channel", "displayValue", "rawValue", "isInternal", "object"];
                                readonly type: "object";
                            };
                        };
                        readonly required: readonly ["displayName"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly id: {
                    readonly description: "Spruce's conversation ID";
                    readonly type: "string";
                    readonly examples: readonly ["t_0E5QDGJC03000"];
                };
                readonly internalEndpoint: {
                    readonly description: "The internal endpoint of the conversation. For secure conversations, this will be a Spruce Link.";
                    readonly properties: {
                        readonly channel: {
                            readonly description: "The channel of the endpoint (e.g. 'email', 'phone', 'fax', etc.). More endpoint channels may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `fax` `secure`";
                            readonly enum: readonly ["email", "phone", "fax", "secure"];
                            readonly type: "string";
                        };
                        readonly displayValue: {
                            readonly description: "The display value of the endpoint. This is the value that should be displayed to the user when showing the endpoint, along with the label if it's populated.";
                            readonly type: "string";
                        };
                        readonly id: {
                            readonly description: "The id of the endpoint";
                            readonly type: "string";
                            readonly examples: readonly [15555555555];
                        };
                        readonly isInternal: {
                            readonly description: "Internal endpoints are endpoints that are owned by your organization, such as your organization's Spruce Phone Numbers or Spruce Links.";
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly label: {
                            readonly description: "The optional label of the endpoint";
                            readonly type: "string";
                            readonly examples: readonly ["Home", "Work"];
                        };
                        readonly object: {
                            readonly description: "String representing the object's type";
                            readonly type: "string";
                        };
                        readonly rawValue: {
                            readonly description: "The raw value of the endpoint. This can be used for programmatically comparing contact values. The raw value for a phone/fax number will be in E164 format.";
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["id", "channel", "displayValue", "rawValue", "isInternal", "object"];
                    readonly type: "object";
                };
                readonly internalMemberIds: {
                    readonly description: "The ids of the teammates, teams and/or your organization that are members of the conversation.";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly type: "array";
                    readonly examples: readonly ["entity_0D4QABCC06000"];
                };
                readonly isReadOnly: {
                    readonly description: "If the conversation is read-only, messages cannot be sent to it.";
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly lastMessageAt: {
                    readonly description: "The time of the conversations latest message";
                    readonly format: "date-time";
                    readonly type: "string";
                    readonly examples: readonly ["2020-04-01T00:00:00Z"];
                };
                readonly object: {
                    readonly description: "String representing the object's type";
                    readonly type: "string";
                };
                readonly subtitle: {
                    readonly description: "The subtitle of the conversation";
                    readonly type: "string";
                    readonly examples: readonly ["Billing"];
                };
                readonly tags: {
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly description: "Spruce's conversation tag ID";
                                readonly type: "string";
                                readonly examples: readonly ["tag_0E5QDGJC03000"];
                            };
                            readonly object: {
                                readonly description: "String representing the object's type";
                                readonly type: "string";
                            };
                            readonly value: {
                                readonly description: "The text value of a conversation tag";
                                readonly type: "string";
                                readonly examples: readonly ["Smith"];
                            };
                        };
                        readonly required: readonly ["id", "value", "object"];
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly title: {
                    readonly description: "The title of the conversation";
                    readonly type: "string";
                    readonly examples: readonly ["John Doe"];
                };
                readonly type: {
                    readonly description: "The type of the conversation (e.g. 'email', 'phone', 'secure', etc.). Note that SMS will be in a 'phone' conversation, and video calls will be in a 'secure' conversation. More conversation types may be added in the future, so ensure while parsing this that you gracefully handle any new/unexpected values.\n\n`email` `phone` `secure` `fax` `team` `note` `other`";
                    readonly enum: readonly ["email", "phone", "secure", "fax", "team", "note", "other"];
                    readonly type: "string";
                };
            };
            readonly required: readonly ["appURL", "apiURL", "archived", "createdAt", "id", "isReadOnly", "tags", "type", "title", "object"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UploadMedia: {
    readonly body: {
        readonly properties: {
            readonly media: {
                readonly format: "binary";
                readonly type: "string";
            };
        };
        readonly required: readonly ["media"];
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly id: {
                    readonly description: "Spruce's media message ID";
                    readonly type: "string";
                    readonly examples: readonly ["d7b25969-86ec-7e37-3776-3577-c0637a0c"];
                };
                readonly object: {
                    readonly description: "String representing the object's type";
                    readonly type: "string";
                };
            };
            readonly required: readonly ["id", "object"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const WebhookEndpoint: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly endpointId: {
                    readonly description: "The id of the webhook destination endpoint.";
                    readonly type: "string";
                    readonly examples: readonly ["wde_01HWDG5ADNBGJ3XXXXXFP8P1GH"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["endpointId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly endpoint: {
                    readonly properties: {
                        readonly createdAt: {
                            readonly description: "The date the destination endpoint was created";
                            readonly format: "date-time";
                            readonly type: "string";
                            readonly examples: readonly ["2020-04-01T00:00:00Z"];
                        };
                        readonly id: {
                            readonly description: "The id of a webhook destination endpoint";
                            readonly type: "string";
                            readonly examples: readonly ["wde_01HWDG5ADNBGJ3XXXXXFP8P1GH"];
                        };
                        readonly name: {
                            readonly description: "The name of the webhook destination endpoint";
                            readonly type: "string";
                            readonly examples: readonly ["My Webhook Endpoint"];
                        };
                        readonly object: {
                            readonly description: "String representing the object's type";
                            readonly type: "string";
                        };
                        readonly signingSecrets: {
                            readonly items: {
                                readonly description: "The signing secret for the webhook endpoint. This is used to verify the authenticity of the webhook payload. This value is only populated when the webhook endpoint is created.";
                                readonly properties: {
                                    readonly id: {
                                        readonly description: "The ID of the signing secret";
                                        readonly type: "string";
                                        readonly examples: readonly ["wss_01HWDG5ADNBGXXXXXY07DP8"];
                                    };
                                    readonly value: {
                                        readonly description: "The signing secret";
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["id", "value"];
                                readonly type: "object";
                            };
                            readonly type: "array";
                        };
                        readonly status: {
                            readonly description: "The status of the webhook destination endpoint";
                            readonly type: "string";
                        };
                        readonly url: {
                            readonly description: "The URL of the webhook destination endpoint";
                            readonly format: "url";
                            readonly type: "string";
                            readonly examples: readonly ["https://example.com/webhook"];
                        };
                    };
                    readonly required: readonly ["createdAt", "id", "signingSecrets", "status", "url", "object"];
                    readonly type: "object";
                };
            };
            readonly required: readonly ["endpoint"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Invalid Contact ID"];
                };
                readonly statusCode: {
                    readonly type: "integer";
                    readonly examples: readonly [400];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["BAD_PARAMETER"];
                };
            };
            readonly required: readonly ["message", "statusCode", "type"];
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { Contact, ContactConversations, ContactFields, ContactIntegrationLinks, ContactTags, Conversation, ConversationItem, ConversationItems, ConversationTags, CreateContact, CreateContactField, CreateContactIntegrationLink, CreateContactTag, CreateConversation, CreateConversationTag, CreateWebhookEndpoint, DeleteContact, DeleteContactIntegrationLink, DeleteConversationItem, DeleteScheduledMessage, DeleteWebhookEndpoint, InternalEndpoints, ListContacts, ListConversationScheduledMessages, ListConversations, ListScheduledMessages, ListWebhookEndpointEvents, ListWebhookEndpoints, ModifyWebhookEndpointPaused, Organization, OrganizationMember, OrganizationMembers, PhoneLine, PhoneLines, PostConversationMessage, PostMessageFromEndpoint, ScheduleConversationMessage, SearchContacts, SendInvite, TeamMembers, UpdateContact, UpdateConversation, UploadMedia, WebhookEndpoint };
