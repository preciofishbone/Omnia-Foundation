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
        public void $fileinputname$Timer([TimerTrigger("01:00:00")] TimerInfo timerInfo)
        {
            try
            {
                // Your job code here
            }
            catch (Exception ex)
            {
                WorkWith().Logging().AddLog("$fileinputname$Timer", ex.Message, DefaultLogTypes.Error, ex);
            }
        }
    }
}
