using Omnia.Foundation.Extensibility.ContentTypes.BuiltIn;
using Omnia.Foundation.Extensibility.TenantResources;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace $rootnamespace$
{
    [TenantResourceFolderMapping(id: "$guid1$", name: "TenantResources")]
    public class $fileinputname$
    {
        [TenantResourceFolderMapping(id: "$guid2$", name: "Folder1")]
        public class Folder1
        {
            [TenantResourceFileMapping("$guid3$", "/TenantResources/Folder1/script1.js")]
            public string Script1 { get; set; }
        }
    }
}
