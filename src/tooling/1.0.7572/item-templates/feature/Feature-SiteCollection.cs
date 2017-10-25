using Omnia.Foundation.Models.Features;
using Omnia.Foundation.Extensibility.Features;
using Omnia.Foundation.Extensibility.Core;
using Omnia.Foundation.Extensibility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace $rootnamespace$
{
    [FeatureDefinition(
       id: "$guid1$",
       name: "$fileinputname$",
       version: "0.1.0",
       scope: FeatureScopes.SiteCollection
    )]
    public class $fileinputname$ : OmniaFeature
    {
         /// <summary>
        /// Activates the feature
        /// </summary>
        public override void Activate()
        {
        }

        /// <summary>
        /// Deactivates the feature.
        /// </summary>
        /// <param name="fromVersion">From version.</param>
        public override void Deactivate(string fromVersion)
        {
        }

        /// <summary>
        /// Upgrades the feature
        /// </summary>
        /// <param name="fromVersion">From version.</param>
        public override void Upgrade(string fromVersion)
        {

        }

        /// <summary>
        /// Called when [feature resource mappings is being performed].
        /// </summary>
        /// <param name="resourceMapper">The resource mapper.</param>
        public override void OnTenantResourceMappings(TenantResourcesMapper resourceMapper)
        {
           
        }

        /// <summary>
        /// Called when [feature sharepoint artifacts mappings is being performed].
        /// </summary>
        /// <param name="artifactMapper">The artifacts mapper.</param>
        public override void OnSharePointArtifactMappings(SharePointArtifactMapper artifactMapper)
        {

        }
    }
}
