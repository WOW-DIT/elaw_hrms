# Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

from hrms.hr.utils import validate_active_employee


class TravelRequest(Document):
	def validate(self):
		validate_active_employee(self.employee)

	def on_submit(self):
		if self.status == "Pending":
			frappe.throw("يجب أن تكون الحالة (موافق أو مرفوض) لرفع المستند")
