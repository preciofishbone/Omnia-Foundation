using Omnia.Foundation.Extensibility.Jobs;
using Omnia.Foundation.Extensibility.Core;
using Omnia.Foundation.Extensibility;
using Omnia.Foundation.Models.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace $rootnamespace$
{
    [JobDefinition(
       id: "$guid1$",
       name: "$fileinputname$",
       description: ""       
    )]
    public class $fileinputname$ : OmniaJob
    {
        // TODO: replace the type of queueMessage with the correct type
        public void $fileinputname$Queue([QueueTrigger("$fileinputname$")] object queueMessage)
        {
            try
            {
                // Your job code here
            }
            catch (Exception ex)
            {
                WorkWith().Logging().AddLog("$fileinputname$Queue", ex.Message, DefaultLogTypes.Error, ex);
            }
        }
    }
}
