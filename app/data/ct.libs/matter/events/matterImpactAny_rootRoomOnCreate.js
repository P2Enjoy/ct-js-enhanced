{
    const [templateName] = [/*%%ENTITY_NAME%%*/];
    ct.matter.rulebookStart.push({
        mainTemplate: templateName,
        any: true,
        // eslint-disable-next-line no-unused-vars
        func: function (other, impact) {
            /*%%USER_CODE%%*/
        }
    });
}
