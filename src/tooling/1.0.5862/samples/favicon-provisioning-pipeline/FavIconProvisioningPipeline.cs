using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Omnia.Foundation.Extensibility.TenantResources;
using Omnia.Foundation.Models.Tenants;

namespace $safeprojectname$.ProvisioningPipeline
{
  
    [SharePointFileProvisioningPipelineDefinition(id: "$newGuid$")]
    public class SetCustomFavicoProvisioningPipeline : SharePointFileProvisioningPipeline
    {
        public override string AfterContentReplacements(string content, TenantResource tenantResource)
        {
            return content;
        }

        public override string BeforeContentReplacements(string content, TenantResource tenantResource)
        {
            var portalMasterPageId = new Guid(BuiltInResources.MasterPages.Omnia);
            string favicoResourceId = "$newGuid$";

            if (tenantResource.Id == portalMasterPageId ||
               (tenantResource.Meta != null
                && tenantResource.Meta == Omnia.Foundation.Extensibility.Constants.TenantResource.Meta.PageWithoutMasterPage))
            {
                content = content.Replace(
                    "/_layouts/15/images/favicon.ico?rev=40",
                    "{{CdnUrl}}/resources/" + favicoResourceId + "?tid={{TenantId}}");
            }

            return content;
        }
    }
}
