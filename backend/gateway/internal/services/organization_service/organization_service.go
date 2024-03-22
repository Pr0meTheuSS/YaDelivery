package organization_service

type OrganizationService struct {
	//connShop net.Conn
}

func NewOrganizationService() OrganizationService {
	return OrganizationService{}
}

// Root
func (o *OrganizationService) GetOrganization()      {}
func (o *OrganizationService) GetOrganizationShops() {}

// Mutations
func (o *OrganizationService) CreateOrganization() {}
func (o *OrganizationService) UpdateOrganization() {}
