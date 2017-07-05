using Microsoft.SharePoint.Client;
using Omnia.Foundation.Extensibility;
using Omnia.Foundation.Extensibility.ContentTypes;
using Omnia.Foundation.Extensibility.Fields;
using Omnia.Foundation.Extensibility.Fields.BuiltIn;
using Omnia.Foundation.Extensibility.Lists;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace $rootnamespace$
{
    [List(url: "lists/$fileinputname$", 
    title: "$Localize:$rootnamespace$.$fileinputname$.Name;", 
    listTemplate: ListTemplateType.GenericList, 
    description: "$Localize:$rootnamespace$.$fileinputname$.Description;")]
    public class $fileinputname$ : ListBase, IListBase
    {
        /// <summary>
        /// Gets the content types.
        /// </summary>
        /// <value>
        /// The content types.
        /// </value>
        public IEnumerable<ContentTypeBase> ContentTypes
        {
            get { return GetContentTypes(); }
        }

        /// <summary>
        /// Gets the fields.
        /// </summary>
        /// <value>
        /// The fields.
        /// </value>
        [FieldRef(typeof(LinkTitle))]
        public IEnumerable<FieldBase> Fields
        {
            get { return GetFields(); }
        }

        /// <summary>
        /// Gets the default view.
        /// </summary>
        /// <value>
        /// The default view.
        /// </value>
        [FieldRef(typeof(LinkTitle), 1)]        
        public IEnumerable<FieldBase> DefaultView
        {
            get { return GetDefaultViewFields(); }
        }
    }
}
