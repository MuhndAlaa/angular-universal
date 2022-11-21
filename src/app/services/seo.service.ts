import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: any
  ) {}

  setPageTitle(title: string) {
    this.title.setTitle(title);
  }

  getPageTitle() {
    return this.title.getTitle();
  }

  addPageTag(tag: any) {
    this.meta.addTag(tag);
  }

  getPageTag(tag: string) {
    return this.meta.getTag(tag);
  }

  addPageTags(tags: any) {
    this.meta.addTags(tags);
  }

  getPageTags(tags: string) {
    return this.meta.getTags(tags);
  }

  updatePageTag(tag: any) {
    this.meta.updateTag(tag);
  }

  addCanonicalURL() {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', this.doc.URL.split('?')[0]);
    this.addPageTags([
      { name: 'og:url', content: `${this.doc.URL.split('?')[0]}` },
      { name: 'twitter:url', content: `${this.doc.URL.split('?')[0]}` },
    ]);
  }
}
