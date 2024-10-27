// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on("Travel Request", {
	refresh: function (frm) {
		if(frm.doc.docstatus === 0) {
			frm.add_custom_button(__('Approve'), function(){
				frm.set_value("status", "Approved")
				frm.save()
			}, __("Status"));
	
			frm.add_custom_button(__('Reject'), function(){
				frm.set_value("status", "Rejected")
				frm.save()
			}, __("Status"));
		}
	},
});
