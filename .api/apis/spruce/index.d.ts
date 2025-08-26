import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * This operation lists all contacts available to a given organization.
     *
     * The `hasMore` field can be used to determine if there are remaining results to list. The
     * `paginationToken` field can be provided on subsequents calls to retrieve the next page
     * of results.
     *
     * @summary List contacts
     * @throws FetchError<400, types.ListContactsResponse400> bad request
     * @throws FetchError<500, types.ListContactsResponse500> unexpected error
     */
    listContacts(metadata?: types.ListContactsMetadataParam): Promise<FetchResponse<200, types.ListContactsResponse200>>;
    /**
     * This operation creates a contact within an organization.
     *
     * Creating a new contact requires at least of the following fields to be populated
     * (`givenName`, `familyName`, `phoneNumbers`, `faxNumbers`, `emailAddresses`).
     *
     * @summary Create a contact
     * @throws FetchError<400, types.CreateContactResponse400> bad request
     * @throws FetchError<422, types.CreateContactResponse422> duplicate request
     * @throws FetchError<500, types.CreateContactResponse500> unexpected error
     */
    createContact(body: types.CreateContactBodyParam, metadata?: types.CreateContactMetadataParam): Promise<FetchResponse<201, types.CreateContactResponse201>>;
    /**
     * This operation deletes a specific contact by id.
     *
     * See the `canDelete` field on a given contact to determine if deletion is allowed.
     *
     * @summary Delete a contact
     * @throws FetchError<400, types.DeleteContactResponse400> bad request
     * @throws FetchError<404, types.DeleteContactResponse404> not found
     * @throws FetchError<500, types.DeleteContactResponse500> unexpected error
     */
    deleteContact(metadata: types.DeleteContactMetadataParam): Promise<FetchResponse<200, types.DeleteContactResponse200>>;
    /**
     * This operation retrieves a specific contact by id.
     *
     * @summary Get a contact by Spruce Contact ID
     * @throws FetchError<400, types.ContactResponse400> bad request
     * @throws FetchError<404, types.ContactResponse404> not found
     * @throws FetchError<500, types.ContactResponse500> unexpected error
     */
    contact(metadata: types.ContactMetadataParam): Promise<FetchResponse<200, types.ContactResponse200>>;
    /**
     * This operation updates a specific contact by id.
     *
     * Fields provided in the input object will be updated, omitted fields *(null)* will be
     * unchanged.
     *
     * @summary Update a contact
     * @throws FetchError<400, types.UpdateContactResponse400> bad request
     * @throws FetchError<404, types.UpdateContactResponse404> not found
     * @throws FetchError<422, types.UpdateContactResponse422> duplicate request
     * @throws FetchError<500, types.UpdateContactResponse500> unexpected error
     */
    updateContact(body: types.UpdateContactBodyParam, metadata: types.UpdateContactMetadataParam): Promise<FetchResponse<200, types.UpdateContactResponse200>>;
    /**
     * This operation retrieves the conversations associated with a contact
     *
     * @summary List the conversations associated with a contact
     * @throws FetchError<400, types.ContactConversationsResponse400> bad request
     * @throws FetchError<404, types.ContactConversationsResponse404> not found
     * @throws FetchError<500, types.ContactConversationsResponse500> unexpected error
     */
    contactConversations(metadata: types.ContactConversationsMetadataParam): Promise<FetchResponse<200, types.ContactConversationsResponse200>>;
    /**
     * This operation deletes a specific integration link associated with a contact.
     *
     * @summary Delete an integration link
     * @throws FetchError<400, types.DeleteContactIntegrationLinkResponse400> bad request
     * @throws FetchError<404, types.DeleteContactIntegrationLinkResponse404> not found
     * @throws FetchError<500, types.DeleteContactIntegrationLinkResponse500> unexpected error
     */
    deleteContactIntegrationLink(body: types.DeleteContactIntegrationLinkBodyParam, metadata: types.DeleteContactIntegrationLinkMetadataParam): Promise<FetchResponse<200, types.DeleteContactIntegrationLinkResponse200>>;
    deleteContactIntegrationLink(metadata: types.DeleteContactIntegrationLinkMetadataParam): Promise<FetchResponse<200, types.DeleteContactIntegrationLinkResponse200>>;
    /**
     * This operation retrieves the integration links associated with a contact
     *
     * @summary List the integration links associated with a contact
     * @throws FetchError<400, types.ContactIntegrationLinksResponse400> bad request
     * @throws FetchError<404, types.ContactIntegrationLinksResponse404> not found
     * @throws FetchError<500, types.ContactIntegrationLinksResponse500> unexpected error
     */
    contactIntegrationLinks(metadata: types.ContactIntegrationLinksMetadataParam): Promise<FetchResponse<200, types.ContactIntegrationLinksResponse200>>;
    /**
     * This operation creates a link between a contact and an external system with which the
     * Spruce account is integrated.
     *
     * @summary Create an integration link
     * @throws FetchError<400, types.CreateContactIntegrationLinkResponse400> bad request
     * @throws FetchError<422, types.CreateContactIntegrationLinkResponse422> duplicate request
     * @throws FetchError<500, types.CreateContactIntegrationLinkResponse500> unexpected error
     */
    createContactIntegrationLink(body: types.CreateContactIntegrationLinkBodyParam, metadata: types.CreateContactIntegrationLinkMetadataParam): Promise<FetchResponse<201, types.CreateContactIntegrationLinkResponse201>>;
    createContactIntegrationLink(metadata: types.CreateContactIntegrationLinkMetadataParam): Promise<FetchResponse<201, types.CreateContactIntegrationLinkResponse201>>;
    /**
     * This operation sends an invite to a patient contact:
     * - If the contact is invited for the first time, a new secure conversation will be
     * created,
     * - If the contact is already invited, the invite will be re-sent to the same secure
     * conversation,
     * - If the contact is already on Spruce, an error will be returned.
     *
     * @summary Invite patient to Spruce
     * @throws FetchError<400, types.SendInviteResponse400> bad request
     * @throws FetchError<404, types.SendInviteResponse404> not found
     * @throws FetchError<500, types.SendInviteResponse500> unexpected error
     */
    sendInvite(body: types.SendInviteBodyParam, metadata: types.SendInviteMetadataParam): Promise<FetchResponse<200, types.SendInviteResponse200>>;
    /**
     * This operation lists all organization contact fields. These fields appear on all
     * contacts in the interface.
     *
     * @summary List all organization contact fields available to the organization
     * @throws FetchError<400, types.ContactFieldsResponse400> bad request
     * @throws FetchError<500, types.ContactFieldsResponse500> unexpected error
     */
    contactFields(metadata?: types.ContactFieldsMetadataParam): Promise<FetchResponse<200, types.ContactFieldsResponse200>>;
    /**
     * This operation creates an organization contact field for the given organization. This
     * field will appear on all contacts in the interface. Requesting creation of an already
     * existing field will result in a `201` response and the response will contain the
     * existing field.
     *
     * @summary Create an organization contact field
     * @throws FetchError<400, types.CreateContactFieldResponse400> bad request
     * @throws FetchError<422, types.CreateContactFieldResponse422> duplicate request
     * @throws FetchError<500, types.CreateContactFieldResponse500> unexpected error
     */
    createContactField(body: types.CreateContactFieldBodyParam, metadata?: types.CreateContactFieldMetadataParam): Promise<FetchResponse<201, types.CreateContactFieldResponse201>>;
    /**
     * This operation searches all contacts available to a given organization and returns a
     * resulting set of results.
     *
     *
     * The `hasMore` field can be used to determine if there are remaining results to list. The
     * `paginationToken` field can be provided on subsequents calls to retrieve the next page
     * of results.
     *
     *
     * ## Sort Order
     *
     * Results are sorted by **entity ID in ascending order** when doing a structured search
     * and by **relevance** for free text search.
     *
     * Why is this a `POST`? `GET` requests with a body are not supported by all HTTP
     * libraries. To support complex nested search filters and other tooling, the `POST` body
     * is leveraged.
     *
     * @summary Search contacts
     * @throws FetchError<400, types.SearchContactsResponse400> bad request
     * @throws FetchError<500, types.SearchContactsResponse500> unexpected error
     */
    searchContacts(body: types.SearchContactsBodyParam, metadata?: types.SearchContactsMetadataParam): Promise<FetchResponse<200, types.SearchContactsResponse200>>;
    /**
     * This operation lists all contact tags available to a given organization.
     *
     * The `hasMore` field can be used to determine if there are remaining results to list. The
     * `paginationToken` field can be provided on subsequents calls to retrieve the next page
     * of results.
     *
     * @summary List all contact tags available to the organization
     * @throws FetchError<400, types.ContactTagsResponse400> bad request
     * @throws FetchError<500, types.ContactTagsResponse500> unexpected error
     */
    contactTags(metadata?: types.ContactTagsMetadataParam): Promise<FetchResponse<200, types.ContactTagsResponse200>>;
    /**
     * This operation creates a contact tag for the given organization. This tag can then be
     * applied to contacts in subsequent operations. Requesting creation of an already existing
     * tag will result in a `201` response and the response will contain the existing tag.
     *
     * @summary Create a contact tag
     * @throws FetchError<400, types.CreateContactTagResponse400> bad request
     * @throws FetchError<422, types.CreateContactTagResponse422> duplicate request
     * @throws FetchError<500, types.CreateContactTagResponse500> unexpected error
     */
    createContactTag(body: types.CreateContactTagBodyParam, metadata?: types.CreateContactTagMetadataParam): Promise<FetchResponse<201, types.CreateContactTagResponse201>>;
    /**
     * Deletes a specific conversation item by ID. This operation follows the same business
     * rules as the in-app delete mechanism, including permission checks and content
     * restrictions.
     *
     * **Soft Delete Behavior**: The API performs a soft delete, creating a placeholder that
     * can be restored by users with appropriate access. The conversation item will be marked
     * as deleted but not permanently removed from the system.
     *
     * **Permission Requirements**: You can only delete conversation items in conversations
     * owned by your organization. The deletion must comply with the same restrictions as the
     * Spruce app (e.g., certain system messages cannot be deleted).
     *
     * **Asynchronous Processing**: The deletion is processed asynchronously. The API
     * immediately returns a `requestId` that can be used to correlate this deletion request
     * with webhook events when the deletion is actually completed.
     *
     * @summary Delete a conversation item
     * @throws FetchError<400, types.DeleteConversationItemResponse400> bad request
     * @throws FetchError<403, types.DeleteConversationItemResponse403> forbidden - user does not have permission to delete this conversation item
     * @throws FetchError<404, types.DeleteConversationItemResponse404> not found
     * @throws FetchError<500, types.DeleteConversationItemResponse500> unexpected error
     */
    deleteConversationItem(metadata: types.DeleteConversationItemMetadataParam): Promise<FetchResponse<200, types.DeleteConversationItemResponse200>>;
    /**
     * This operation fetches a specific conversation item for the provided id.
     *
     * @summary Get a conversation item for a given id
     * @throws FetchError<400, types.ConversationItemResponse400> bad request
     * @throws FetchError<404, types.ConversationItemResponse404> not found
     * @throws FetchError<500, types.ConversationItemResponse500> unexpected error
     */
    conversationItem(metadata: types.ConversationItemMetadataParam): Promise<FetchResponse<200, types.ConversationItemResponse200>>;
    /**
     * This operation lists all conversations available to the organization. This is an
     * eventually consistent view and may take a short time before new conversations appear in
     * results.
     *
     *
     * To iterate through all conversations in the organization, list the first page of
     * conversations (without specifying `paginationToken` or `startFrom`). If `hasMore=true`,
     * the provide the `paginationToken` to the API to list subsequent pages of conversations
     * until `hasMore=false`.
     *
     *
     * ## Detecting conversations with new messages
     *
     * Note that the conversations are ordered by created date by default. You can also order
     * them by the time of last activity in the conversation by specifying
     * `orderBy=last_message`. This is particularly helpful when trying to determine
     * conversations with new activity in them. In this particular case, you can query the list
     * of conversations with `orderBy=last_message` and capture the `lastMessageAt` time for
     * the last conversation in the list. On the next query, you can then
     * `startFrom=<lastMessageAt time you saved>` and `orderBy=last_message` to return any
     * conversations with new activity since your last query.
     *
     *
     * While you can determine the conversations with new activity, it is also important to
     * know if the latest messages in each conversation were from your teammates or from an
     * external contact (like a patient). To determine this, you can use the [listing of
     * conversation items API](/reference/conversationitems) to query for the latest items
     * since a particular time with the `startFrom` field. If any message in the list returned
     * has `direction=inbound` then it indicates a message received since the last query for
     * message items.
     *
     * @summary List and filter all conversations available to the organization
     * @throws FetchError<400, types.ListConversationsResponse400> bad request
     * @throws FetchError<500, types.ListConversationsResponse500> unexpected error
     */
    listConversations(metadata: types.ListConversationsMetadataParam): Promise<FetchResponse<200, types.ListConversationsResponse200>>;
    /**
     * This operation creates a new conversation within an organization.
     *
     * **Note:** Only secure conversation types can be created through this API endpoint.
     *
     * A new conversation can be started with a single contact or a group of contacts. All
     * contacts must be patients and either have a Spruce account or a pending secure invite.
     *
     * ### Asynchronous Message Processing
     *
     * If a message is included in the conversation creation request, the message will be
     * posted asynchronously after the conversation is created. The API will immediately return
     * the conversation details along with a `postMessageRequestId` that can be used to track
     * when the message is actually sent.
     *
     * The `postMessageRequestId` returned in the response can be matched against the
     * `requestID` field of the `conversationItem.created` webhook event to identify when the
     * message has been successfully posted to the conversation.
     *
     * @summary Create a new conversation
     * @throws FetchError<400, types.CreateConversationResponse400> bad request
     * @throws FetchError<500, types.CreateConversationResponse500> unexpected error
     */
    createConversation(body: types.CreateConversationBodyParam, metadata?: types.CreateConversationMetadataParam): Promise<FetchResponse<201, types.CreateConversationResponse201>>;
    /**
     * This operation fetches a specific conversation for the provided id.
     *
     * @summary Get a conversation for a given id
     * @throws FetchError<400, types.ConversationResponse400> bad request
     * @throws FetchError<404, types.ConversationResponse404> not found
     * @throws FetchError<500, types.ConversationResponse500> unexpected error
     */
    conversation(metadata: types.ConversationMetadataParam): Promise<FetchResponse<200, types.ConversationResponse200>>;
    /**
     * This operation updates a specific conversation by id.
     *
     * Fields provided in the input object will be updated, omitted fields *(null)* will be
     * unchanged.
     *
     * @summary Update a conversation
     * @throws FetchError<400, types.UpdateConversationResponse400> bad request
     * @throws FetchError<404, types.UpdateConversationResponse404> not found
     * @throws FetchError<422, types.UpdateConversationResponse422> duplicate request
     * @throws FetchError<500, types.UpdateConversationResponse500> unexpected error
     */
    updateConversation(body: types.UpdateConversationBodyParam, metadata: types.UpdateConversationMetadataParam): Promise<FetchResponse<200, types.UpdateConversationResponse200>>;
    /**
     * This operation lists all conversations items available in a conversation. This is an
     * eventually consistent view and may take a short time before new conversation items
     * appear in results.
     *
     * @summary List and filter all conversation items in a conversation
     * @throws FetchError<400, types.ConversationItemsResponse400> bad request
     * @throws FetchError<500, types.ConversationItemsResponse500> unexpected error
     */
    conversationItems(metadata: types.ConversationItemsMetadataParam): Promise<FetchResponse<200, types.ConversationItemsResponse200>>;
    /**
     * This operation posts a message in a conversation as specified by the conversationId. You
     * can retrieve the conversationId by [listing the conversations for a
     * contact](/reference/contactconversations) or by [listing all conversations in the
     * organization](/reference/conversations). You can also [send messages to a phone number,
     * an email address, fax number, or securely message a
     * contact](/reference/postmessagefromendpoint) using a [specific internal
     * endpoint](/reference/internalendpoints). The `requestID` returned by this API may be
     * used to match against the `requestID` field of the `conversationItem.created` webhook
     * event to identify when the message is posted.
     * ## Posting an internal message containing a page for an organization member
     * To post a message with a page for an organization member, you'll first need to know the
     * member's id. You can find the id of the organization member by [listing all organization
     * members](/reference/organizationmembers). Once the member id is known, you can post a
     * message to the conversation with `internal=true` and an element of `type=page` and
     * `value=<member-id>` in the list of `body` elements being posted.
     * The `body` parameter is a list of message elements. Each element can be of type `text`
     * or `page`. The request can contain combinations of `text` and `page` elements to create
     * internal messages with useful content while also notifying a set of members.
     * ## Posting to a Team or Note conversation
     * You can also use this API to post messages into a Team or Note conversations. For Note
     * conversations, you will have to specify `internal=true` since only internal messages can
     * be posted in Note conversations.
     *
     * @summary Post a message to a specific conversation
     * @throws FetchError<400, types.PostConversationMessageResponse400> bad request
     * @throws FetchError<422, types.PostConversationMessageResponse422> duplicate request
     * @throws FetchError<500, types.PostConversationMessageResponse500> unexpected error
     */
    postConversationMessage(body: types.PostConversationMessageBodyParam, metadata: types.PostConversationMessageMetadataParam): Promise<FetchResponse<200, types.PostConversationMessageResponse200>>;
    /**
     * This operation lists the messages that are scheduled in a conversation.
     *
     * @summary List any messages scheduled in a conversation
     * @throws FetchError<400, types.ListConversationScheduledMessagesResponse400> bad request
     * @throws FetchError<404, types.ListConversationScheduledMessagesResponse404> not found
     * @throws FetchError<500, types.ListConversationScheduledMessagesResponse500> unexpected error
     */
    listConversationScheduledMessages(metadata: types.ListConversationScheduledMessagesMetadataParam): Promise<FetchResponse<200, types.ListConversationScheduledMessagesResponse200>>;
    /**
     * This operation creates a scheduled message to be sent in a conversation at the
     * designated time. If no author is specified, the message will be sent as the
     * organization.
     *
     * @summary Schedule a message to be sent in a conversation
     * @throws FetchError<400, types.ScheduleConversationMessageResponse400> bad request
     * @throws FetchError<404, types.ScheduleConversationMessageResponse404> not found
     * @throws FetchError<422, types.ScheduleConversationMessageResponse422> duplicate request
     * @throws FetchError<500, types.ScheduleConversationMessageResponse500> unexpected error
     */
    scheduleConversationMessage(body: types.ScheduleConversationMessageBodyParam, metadata: types.ScheduleConversationMessageMetadataParam): Promise<FetchResponse<201, types.ScheduleConversationMessageResponse201>>;
    /**
     * This operation lists all conversation tags available to a given organization.
     *
     * The `hasMore` field can be used to determine if there are remaining results to list. The
     * `paginationToken` field can be provided on subsequents calls to retrieve the next page
     * of results.
     *
     * @summary List all conversation tags available to the organization
     * @throws FetchError<400, types.ConversationTagsResponse400> bad request
     * @throws FetchError<500, types.ConversationTagsResponse500> unexpected error
     */
    conversationTags(metadata?: types.ConversationTagsMetadataParam): Promise<FetchResponse<200, types.ConversationTagsResponse200>>;
    /**
     * This operation creates a conversation tag for the given organization. This tag can then
     * be applied to conversations in subsequent operations. Requesting creation of an already
     * existing tag will result in a `201` response and the response will contain the existing
     * tag.
     *
     * @summary Create a conversation tag
     * @throws FetchError<400, types.CreateConversationTagResponse400> bad request
     * @throws FetchError<422, types.CreateConversationTagResponse422> duplicate request
     * @throws FetchError<500, types.CreateConversationTagResponse500> unexpected error
     */
    createConversationTag(body: types.CreateConversationTagBodyParam, metadata?: types.CreateConversationTagMetadataParam): Promise<FetchResponse<201, types.CreateConversationTagResponse201>>;
    /**
     * This operation lists all internal endpoints which organizations can use to communicate
     * with. This includes all Spruce phone numbers, fax numbers, email addresses and Spruce
     * Links. You can then [use an internal endpoint to send a
     * message](/reference/postmessagefromendpoint).
     *
     * @summary List all internal endpoints
     * @throws FetchError<500, types.InternalEndpointsResponse500> unexpected error
     */
    internalEndpoints(): Promise<FetchResponse<200, types.InternalEndpointsResponse200>>;
    /**
     * This operation sends a message to an external endpoint (phone number or email address)
     * or a contact (secure messaging). Only one of secureEndpoint or smsOrEmailEndpoint should
     * be specified. You will need to also specify the appropriate internal endpoint from the
     * [list of available internal endpoints for an
     * organization](/reference/internalendpoints). The RequestID returned by this API may be
     * used to match against the `RequestID` field of the `conversationItem.created` webhook
     * event to identify when the message is posted.
     *
     * ## Send a secure message
     * * Get the appropriate Spruce phone number from the [list of internal endpoints for an
     * organization](/reference/internalendpoints) (of channel type `secure`)
     * * Specify the internal endpoint's `endpoint.Id` in the `internalEndpointId` path
     * parameter
     * * Get the Id of the appropriate contact to send the secure message to. You can [list all
     * contacts in the organization](/reference/listcontacts) or [search for the appropriate
     * contact](/reference/searchcontacts) to determine the contact Id if you do not have it
     * already.
     * * Populate the `destination.secureEndpoint` object with the `contactId`, the appropriate
     * `deliveryMethod` and `subject` for the conversation.
     *
     * The `deliveryMethod` can be one of the following:
     * * (Default) `any_available_secure_conversation`: The system will first try to deliver
     * messages using conversations from the specified internal endpoint. Then it will try to
     * deliver to any existing secure conversation with the recipient. Then, if no conversation
     * exists, a new secure conversation will be created.
     * * `only_conversations_matching_internal_endpoint`: The system will deliver messages in
     * conversations from the specified internal endpoint. If such a conversation doesn't yet
     * exist, a new one will be created.
     * * `new_conversation`: This option will create a new conversation, separate from any
     * existing conversation.
     * ## Send an SMS
     * * Get the appropriate Spruce phone number from the [list of internal endpoints for an
     * organization](/reference/internalendpoints) (of channel type `phone`)
     * * Specify the internal endpoint's `endpoint.Id` in the `internalEndpointId` path
     * parameter
     * * Specify the phone number to send the the message to in the
     * `destination.smsOrEmailEndpoint` body parameter
     * ## Send an email
     * * Get the appropriate Spruce phone number from the [list of internal endpoints for an
     * organization](/reference/internalendpoints) (of channel type `email`)
     * * Specify the internal endpoint's `endpoint.Id` in the `internalEndpointId` path
     * parameter
     * * Specify the email address to send the the message to in the
     * `destination.smsOrEmailEndpoint` body parameter
     * ## Send a fax
     * * Get the appropriate Spruce fax number from the [list of internal endpoints for an
     * organization](/reference/internalendpoints) (of channel type `fax`)
     * * Specify the internal endpoint's `endpoint.Id` in the `internalEndpointId` path
     * parameter
     * * Specify the fax number to send the the message to in the `destination.faxEndpoint`
     * body parameter
     * * Note: Each outbound fax message sent from an internal endpoint will result in a new
     * fax conversation being created
     *
     * @summary Send a message from an internal endpoint
     * @throws FetchError<400, types.PostMessageFromEndpointResponse400> bad request
     * @throws FetchError<422, types.PostMessageFromEndpointResponse422> duplicate request
     * @throws FetchError<500, types.PostMessageFromEndpointResponse500> unexpected error
     */
    postMessageFromEndpoint(body: types.PostMessageFromEndpointBodyParam, metadata: types.PostMessageFromEndpointMetadataParam): Promise<FetchResponse<200, types.PostMessageFromEndpointResponse200>>;
    /**
     * This operation uploads media such a images, videos, and files to Spruce for use in
     * messaging. Uploading a file will return a media ID that can be used to reference the
     * file in other operations. Callers of this API should record the resulting media ID for
     * future use. A media ID can be used in the `attachmentID` field of the [conversation
     * message post attachment](/reference/postmessage). Media IDs can be used multiple times.
     * The `Content-Type` and `Content-Disposition` headers on the multipart `media` field can
     * use used to provide additional metadata about the media. This metadata can impact how
     * the media is displayed and downloaded from the application.
     *
     * **Example Headers**
     * * `Content-Disposition: form-data; name="media"; filename="image.png"`
     * * `Content-Type: image/png`
     *
     * @summary Upload media
     * @throws FetchError<400, types.UploadMediaResponse400> bad request
     * @throws FetchError<500, types.UploadMediaResponse500> unexpected error
     */
    uploadMedia(body: types.UploadMediaBodyParam): Promise<FetchResponse<200, types.UploadMediaResponse200>>;
    /**
     * This returns your organization's information. Most importantly, it returns your
     * organization's `id` which will often be used as the owner or a member of other objects.
     *
     * @summary List information about the organization
     * @throws FetchError<500, types.OrganizationResponse500> unexpected error
     */
    organization(): Promise<FetchResponse<200, types.OrganizationResponse200>>;
    /**
     * This returns a list of all members of the organization. This includes all teammates and
     * all teams, as well as a reference to the organization itself.
     *
     * @summary List all members of the organization
     * @throws FetchError<500, types.OrganizationMembersResponse500> unexpected error
     */
    organizationMembers(metadata?: types.OrganizationMembersMetadataParam): Promise<FetchResponse<200, types.OrganizationMembersResponse200>>;
    /**
     * This operation retrieves a specific organization member (organization, team, or
     * teammate), by id.
     *
     * @summary Get a member of the organization by id
     * @throws FetchError<500, types.OrganizationMemberResponse500> unexpected error
     */
    organizationMember(metadata: types.OrganizationMemberMetadataParam): Promise<FetchResponse<200, types.OrganizationMemberResponse200>>;
    /**
     * This returns a list of all phone lines of the organization.
     *
     * @summary List all phone lines of the organization
     * @throws FetchError<500, types.PhoneLinesResponse500> unexpected error
     */
    phoneLines(): Promise<FetchResponse<200, types.PhoneLinesResponse200>>;
    /**
     * This operation retrieves a specific phone line by id.
     *
     * @summary Get a phone line of the organization by id
     * @throws FetchError<500, types.PhoneLineResponse500> unexpected error
     */
    phoneLine(metadata: types.PhoneLineMetadataParam): Promise<FetchResponse<200, types.PhoneLineResponse200>>;
    /**
     * This operation lists the messages that are scheduled to be sent from the organization.
     *
     * @summary List any messages scheduled for the organization
     * @throws FetchError<400, types.ListScheduledMessagesResponse400> bad request
     * @throws FetchError<500, types.ListScheduledMessagesResponse500> unexpected error
     */
    listScheduledMessages(metadata?: types.ListScheduledMessagesMetadataParam): Promise<FetchResponse<200, types.ListScheduledMessagesResponse200>>;
    /**
     * This operation deletes a scheduled message specified by id.
     *
     * @summary Delete a scheduled message
     * @throws FetchError<400, types.DeleteScheduledMessageResponse400> bad request
     * @throws FetchError<404, types.DeleteScheduledMessageResponse404> not found
     * @throws FetchError<500, types.DeleteScheduledMessageResponse500> unexpected error
     */
    deleteScheduledMessage(metadata: types.DeleteScheduledMessageMetadataParam): Promise<FetchResponse<200, types.DeleteScheduledMessageResponse200>>;
    /**
     * This operation lists the members of a team identified by id.
     *
     * @summary List the members of a team
     * @throws FetchError<500, types.TeamMembersResponse500> unexpected error
     */
    teamMembers(metadata: types.TeamMembersMetadataParam): Promise<FetchResponse<200, types.TeamMembersResponse200>>;
    /**
     * This operation lists the endpoints that an organization has registered for webhooks.
     *
     * @summary List webhook destination endpoints
     * @throws FetchError<400, types.ListWebhookEndpointsResponse400> bad request
     * @throws FetchError<500, types.ListWebhookEndpointsResponse500> unexpected error
     */
    listWebhookEndpoints(): Promise<FetchResponse<200, types.ListWebhookEndpointsResponse200>>;
    /**
     * This operation creates a destination endpoint for webhooks events.
     *
     * @summary Create a webhook destination endpoint
     * @throws FetchError<400, types.CreateWebhookEndpointResponse400> bad request
     * @throws FetchError<500, types.CreateWebhookEndpointResponse500> unexpected error
     */
    createWebhookEndpoint(body: types.CreateWebhookEndpointBodyParam, metadata?: types.CreateWebhookEndpointMetadataParam): Promise<FetchResponse<200, types.CreateWebhookEndpointResponse200>>;
    /**
     * This operation deleted a destination endpoint for webhook events by id.
     *
     * @summary Delete a webhook destination endpoint by id
     * @throws FetchError<400, types.DeleteWebhookEndpointResponse400> bad request
     * @throws FetchError<404, types.DeleteWebhookEndpointResponse404> not found
     * @throws FetchError<500, types.DeleteWebhookEndpointResponse500> unexpected error
     */
    deleteWebhookEndpoint(metadata: types.DeleteWebhookEndpointMetadataParam): Promise<FetchResponse<200, types.DeleteWebhookEndpointResponse200>>;
    /**
     * This operation retrieves a specific destination endpoint for webhooks events by id.
     *
     * @summary Get a webhook destination endpoint by id
     * @throws FetchError<400, types.WebhookEndpointResponse400> bad request
     * @throws FetchError<404, types.WebhookEndpointResponse404> not found
     * @throws FetchError<500, types.WebhookEndpointResponse500> unexpected error
     */
    webhookEndpoint(metadata: types.WebhookEndpointMetadataParam): Promise<FetchResponse<200, types.WebhookEndpointResponse200>>;
    /**
     * This operation retrieves information about events that have been attempted to be
     * published to a webhook destination endpoint. Events are queryable for a period of 30
     * days after creation and are returned in sets of 20 at a time. Use the pagination token
     * to retrieve more events.
     *
     * @summary List events for an endpoint
     * @throws FetchError<400, types.ListWebhookEndpointEventsResponse400> bad request
     * @throws FetchError<404, types.ListWebhookEndpointEventsResponse404> not found
     * @throws FetchError<500, types.ListWebhookEndpointEventsResponse500> unexpected error
     */
    listWebhookEndpointEvents(metadata: types.ListWebhookEndpointEventsMetadataParam): Promise<FetchResponse<200, types.ListWebhookEndpointEventsResponse200>>;
    /**
     * This operation sets the 'paused' state of a webhook destination endpoint.
     *
     * @summary Pause or resume a webhook destination endpoint
     * @throws FetchError<400, types.ModifyWebhookEndpointPausedResponse400> bad request
     * @throws FetchError<404, types.ModifyWebhookEndpointPausedResponse404> not found
     * @throws FetchError<422, types.ModifyWebhookEndpointPausedResponse422> duplicate request
     * @throws FetchError<500, types.ModifyWebhookEndpointPausedResponse500> unexpected error
     */
    modifyWebhookEndpointPaused(metadata: types.ModifyWebhookEndpointPausedMetadataParam): Promise<FetchResponse<200, types.ModifyWebhookEndpointPausedResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
