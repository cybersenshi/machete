import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AvailableSuppliesPreview from './preview-templates/AvailableSuppliesPreview'
import RequestSuppliesPreview from './preview-templates/RequestSuppliesPreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('available-supplies', AvailableSuppliesPreview)
CMS.registerPreviewTemplate('request-supplies', RequestSuppliesPreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
