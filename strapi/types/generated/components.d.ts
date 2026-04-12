import type { Schema, Struct } from '@strapi/strapi';

export interface FooterFooterBranding extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_brandings';
  info: {
    displayName: 'footerBranding';
  };
  attributes: {
    content: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface FooterFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'footerLinks';
  };
  attributes: {
    footerLinks: Schema.Attribute.Component<'footer.link-group', true>;
  };
}

export interface FooterLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_footer_link_groups';
  info: {
    displayName: 'linkGroupContents';
  };
  attributes: {
    link: Schema.Attribute.Component<'test-link.text-link', true>;
    linkGroupName: Schema.Attribute.String;
  };
}

export interface FooterSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_medias';
  info: {
    displayName: 'socialMedia';
  };
  attributes: {
    Content: Schema.Attribute.String;
    socialMedias: Schema.Attribute.Component<
      'footer.social-media-logos-with-link',
      true
    >;
  };
}

export interface FooterSocialMediaLogosWithLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_media_logos_with_links';
  info: {
    displayName: 'socialMediaLogosWithLink';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files'>;
    url: Schema.Attribute.Text;
  };
}

export interface FunnelFunnelImageAndContent extends Struct.ComponentSchema {
  collectionName: 'components_funnel_funnel_image_and_contents';
  info: {
    displayName: 'funnelImageAndContent';
  };
  attributes: {
    FunnelContentImages: Schema.Attribute.Media<'images', true>;
  };
}

export interface LayoutNavlinks extends Struct.ComponentSchema {
  collectionName: 'components_layout_navlinks';
  info: {
    displayName: 'navlinks';
  };
  attributes: {
    children: Schema.Attribute.Component<'layout.sub-nav-links', true>;
    content: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutSubNavLinks extends Struct.ComponentSchema {
  collectionName: 'components_layout_sub_nav_links';
  info: {
    displayName: 'subNavLinks';
  };
  attributes: {
    content: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    content: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface TestLinkTextLink extends Struct.ComponentSchema {
  collectionName: 'components_test_link_text_links';
  info: {
    displayName: 'textLink';
  };
  attributes: {
    content: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface TestimonialsTestimomialsCard extends Struct.ComponentSchema {
  collectionName: 'components_testimonials_testimomials_cards';
  info: {
    displayName: 'testimomialsCard';
  };
  attributes: {
    feedback: Schema.Attribute.Text;
    profile: Schema.Attribute.Media<'images' | 'files'>;
    role: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.footer-branding': FooterFooterBranding;
      'footer.footer-links': FooterFooterLinks;
      'footer.link-group': FooterLinkGroup;
      'footer.social-media': FooterSocialMedia;
      'footer.social-media-logos-with-link': FooterSocialMediaLogosWithLink;
      'funnel.funnel-image-and-content': FunnelFunnelImageAndContent;
      'layout.navlinks': LayoutNavlinks;
      'layout.sub-nav-links': LayoutSubNavLinks;
      'shared.button': SharedButton;
      'test-link.text-link': TestLinkTextLink;
      'testimonials.testimomials-card': TestimonialsTestimomialsCard;
    }
  }
}
