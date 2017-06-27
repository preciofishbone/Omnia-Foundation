using Omnia.Foundation.Models.Features;
using Omnia.Foundation.Extensibility.Features;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Omnia.Foundation.Extensibility.Core;
using Microsoft.SharePoint.Client;

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
        /// Activates the AppFeature
        /// </summary>
        public override void Activate()
        {
            this.Log("Activate feature");
        }

        /// <summary>
        /// Deactivates the AppFeature.
        /// </summary>
        /// <param name="fromVersion">From version.</param>
        public override void Deactivate(string fromVersion)
        {
            this.Log("Deactivate feature");
        }

        /// <summary>
        /// Upgrades the AppFeature
        /// </summary>
        /// <param name="fromVersion">From version.</param>
        public override void Upgrade(string fromVersion)
        {
            this.Log("Upgrade feature from version " + fromVersion);
        }

        /// <summary>
        /// Called when [appfeature resource mappings is being performed].
        /// </summary>
        /// <param name="resourceMapper">The resource mapper.</param>
        public override void OnTenantResourceMappings(TenantResourcesMapper resourceMapper)
        {
           
        }

        /// <summary>
        /// Called when [appfeature sharepoint artifacts mappings is being performed].
        /// </summary>
        /// <param name="artifactMapper">The artifacts mapper.</param>
        public override void OnSharePointArtifactMappings(SharePointArtifactMapper artifactMapper)
        {

        }

        private void SetupPublicBundles(TenantResourcesMapper resourceMapper)
        {
            

        }

        private void SetupAdminBundles(TenantResourcesMapper resourceMapper)
        {
            
        }
    }
}
