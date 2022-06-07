const StudentService = require('./../services/StudentService')
const Reader = require('./../utils/Reader')

const partners = Reader.readJsonFile('visualpartners.json')

class StudentController {
  static getAllPartners(){
    return StudentService.getAllPartners(partners);
  }
  static getPartnersWithCertification(){
    return StudentService.getPartnersWithCertification(partners);
  }
  static getPartnersOver500(){
    return StudentService.getPartnersOver500(partners);
  }
}


module.exports = StudentController;