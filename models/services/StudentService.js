class StudentService {
  static getAllPartners(partners){
    return partners;
  }
  static getPartnersWithCertification(partners){
    const partnersWithCertification = partners.filter((partner) => partner.haveCertification == true);
    return partnersWithCertification.map((partner) => partner.email);
  }
  static getPartnersOver500(partners){
    return partners.filter((partner) => partner.credits >= 500);
  }
}

module.exports = StudentService;