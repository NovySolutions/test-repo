import CMS from 'netlify-cms-app'

import SeniorCenterCardPreview from './preview-templates/seniorCenterCardPreview'

CMS.registerPreviewTemplate('senior-centers', SeniorCenterCardPreview)

CMS.init({
  config: {
    backend: {
      name: 'git-gateway',
    },
    media_folder: 'src/static/uploads',
    public_folder: '/uploads',
    collections: [
      //Collection for CMS Senior Centers page configuration
      {
        label: 'Senior Centers',
        name: 'senior-centers',
        folder: 'src/markdown-pages/senior-centers',
        create: false,
        slug: '{{name}}',
        fields: [
          { label: 'Name', name: 'name', widget: 'string' },
          { label: 'Site Manager', name: 'siteManager', widget: 'string' },
          { label: 'Address', name: 'address', widget: 'string' },
          { label: 'City', name: 'city', widget: 'string' },
          { label: 'Image', name: 'img', widget: 'image' },
          { label: 'Phone Number', name: 'phone', widget: 'string' },
          { label: 'Fax', name: 'fax', widget: 'string', required: false },
          { label: 'Email', name: 'email', widget: 'string' },
          { label: 'Monday Hours', name: 'mondayHours', widget: 'string' },
          {
            label: 'Monday Lunch Hours',
            name: 'mondayLunchHours',
            widget: 'string',
            required: false,
          },
          { label: 'Tuesday Hours', name: 'tuesdayHours', widget: 'string' },
          {
            label: 'Tuesday Lunch Hours',
            name: 'tuesdayLunchHours',
            widget: 'string',
            required: false,
          },
          {
            label: 'Wednesday Hours',
            name: 'wednesdayHours',
            widget: 'string',
          },
          {
            label: 'Wednesday Lunch Hours',
            name: 'wednesdayLunchHours',
            widget: 'string',
            required: false,
          },
          { label: 'Thursday Hours', name: 'thursdayHours', widget: 'string' },
          {
            label: 'Thursday Lunch Hours',
            name: 'thursdayLunchHours',
            widget: 'string',
            required: false,
          },
          { label: 'Friday Hours', name: 'fridayHours', widget: 'string' },
          {
            label: 'Friday Lunch Hours',
            name: 'fridayLunchHours',
            widget: 'string',
            required: false,
          },
        ],
      },
    ],
  },
})
