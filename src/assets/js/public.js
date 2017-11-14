$(document).ready(function () {
    $('#userTable').DataTable({
        "ajax": {
            "url": "user/data",
            "type": "GET"
        },
        "processing": true,
        "serverSide": true,
        "order": [[0, "desc"]],
        "columnDefs": [
            { "orderable": false, "targets": 1 },
            { "orderable": false, "targets": 2 },
            { "orderable": false, "targets": 3 },
            { "orderable": false, "targets": 6 }
        ],
        "columns": [
            {
                "data": "Id",
            },
            {
                "data": "username",
                "render": function (data, type, row, meta) {
                    return data + " " + row.firstname;
                }
            },
            {
                "data": "firstname",
                "render": function (data, type, row, meta) {
                    return data + " " + row.firstname;
                }
            },
            {
                "data": "lastname",
                "render": function (data, type, row, meta) {
                    return data + " " + row.lastname;
                }
            },

            {
                "data": "companyname",
                "render": function (data, type, row, meta) {
                    return data + " " + row.companyname;
                }
            },

        ]
    });

});