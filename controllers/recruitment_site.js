const models = require('../models/index');
const RECRUITMENT_SITE = require('../models/recruitment_site');

exports.list = (req, res) => {
    models.RECRUITMENT_SITE.findAll({}).then(recruitment_sites => {
        res.json(recruitment_sites);
    });
};

exports.read = (req, res) => {
    models.RECRUITMENT_SITE.findByPk(req.params.id).then(recruitment_site => {
        res.json(recruitment_site);
    });
};

exports.create = (req, res) => {
    
};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};