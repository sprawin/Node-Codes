const leads = [
    {'FirstName':'John','LastName':'Doe','Amount':50000},
    {'FirstName':'Mark','LastName':'Wilson','Amount':25000},
    {'FirstName':'Joe','LastName':'Carter','Amount':45000}
];

let bigLeads = leads.filter((lead)=>{
    return lead.Amount > 40000;
});

console.log(bigLeads);