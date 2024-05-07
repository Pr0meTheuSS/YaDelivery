package organization_service

type IOrganizationService interface {
	// Root
	GetOrganization()
	GetOrganizationShops()

	// Mutations
	CreateOrganization()
	UpdateOrganization()
}
