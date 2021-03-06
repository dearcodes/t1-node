var common = require('./common');

module.exports = {
    "site_list": {
        "id": "/site_list",
        "type": "object",
        "properties": {
            "organization_id": {
                "id": "/site_list/organization_id",
                "type": "integer"
            },
            "sites_count": {
                "id": "/site_list/sites_count",
                "type": "integer"
            },
            "sites_count_domain": {
                "id": "/site_list/sites_count_domain",
                "type": "integer"
            },
            "status": {
                "id": "/site_list/status",
                "type": "boolean"
            },
            "filename": {
                "id": "/site_list/filename",
                "type": "string"
            },
            "restriction": {
                "id": "/site_list/restriction",
                "enum": [
                    "INCLUDE",
                    "EXCLUDE"
                ],
                "default": "EXCLUDE"
            },
            "created_on": {
                "id": "/site_list/created_on",
                "type": "string",
                "format": "datetimezone",
                "readonly": true
            },
            "updated_on": {
                "id": "/site_list/updated_on",
                "type": "string",
                "format": "datetimezone",
                "readonly": true
            }
        },
        "required": [
            "name",
            "organization_id"
        ]
    },
    "allOf": [
        common.entity,
        {
            "$ref": "#/site_list"
        }
    ]
};
