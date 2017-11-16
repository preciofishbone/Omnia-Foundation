using Omnia.Foundation.Models.Features;
using Omnia.Foundation.Extensibility.Features;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Omnia.Foundation.Extensibility.Core;
using Microsoft.SharePoint.Client;
using $safeprojectname$.ResourceMappings;

namespace $safeprojectname$.Features
{
    [FeatureDefinition(
       id: "$newGuid$",
       name: "$safeprojectname$ Core",
       version: "1.0.0",
       scope: FeatureScopes.Tenant
    )]
    public class CoreFeature : OmniaFeature
    {
        /// <summary>
        /// Activates the Feature
        /// </summary>
        public override void Activate()
        {
            this.Log("Activate feature");
        }

        /// <summary>
        /// Deactivates the Feature.
        /// </summary>
        /// <param name="fromVersion">From version.</param>
        public override void Deactivate(string fromVersion)
        {
            this.Log("Deactivate feature");
        }

        /// <summary>
        /// Upgrades the Feature
        /// </summary>
        /// <param name="fromVersion">From version.</param>
        public override void Upgrade(string fromVersion)
        {
            this.Log("Upgrade feature from version " + fromVersion);
        }

        /// <summary>
        /// Called when [feature resource mappings is being performed].
        /// </summary>
        /// <param name="resourceMapper">The resource mapper.</param>
        public override void OnTenantResourceMappings(TenantResourcesMapper resourceMapper)
        {
           resourceMapper
            .AddOrUpdateTenantResourcesFrom<TenantResources>();

            SetupPublicBundles(resourceMapper);
            SetupAdminBundles(resourceMapper);
        }

        /// <summary>
        /// Called when [feature sharepoint artifacts mappings is being performed].
        /// </summary>
        /// <param name="artifactMapper">The artifacts mapper.</param>
        public override void OnSharePointArtifactMappings(SharePointArtifactMapper artifactMapper)
        {
            
        }

        private void SetupPublicBundles(TenantResourcesMapper resourceMapper)
        {
            // TODO: Change this to only bundle the resources needed in SharePoint
            resourceMapper
                .CreateBundleFor(BundleTargets.SharePoint)
                .Include<CoreMappings.TenantResources>();
            
            resourceMapper
                .SetBundlesSequence(500, BundleTargets.SharePoint);
        }

        private void SetupAdminBundles(CoreMappings.TenantResourcesMapper resourceMapper)
        {
            // TODO: Change this to only bundle the resources needed in Omnia admin
            resourceMapper
                .CreateBundleFor(BundleTargets.OmniaAdmin)
                .Include<CoreMappings.TenantResources>();

            resourceMapper
                .SetBundlesSequence(500, BundleTargets.OmniaAdmin);
        }
    }
}
