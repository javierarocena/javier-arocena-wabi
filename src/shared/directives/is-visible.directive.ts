import {
  Directive,
  Component,
  Input,
  ViewContainerRef,
  TemplateRef,
  AfterViewInit,
} from '@angular/core';

@Directive({ selector: '[inView]' })
export class InView implements AfterViewInit {
  alreadyRendered: boolean = false;

  constructor(
    private vcRef: ViewContainerRef,
    private tplRef: TemplateRef<any>
  ) {}

  ngAfterViewInit() {
    const commentEl = this.vcRef.element.nativeElement;
    const elToObserve = commentEl.parentElement;
    this.setMinWidthHeight(elToObserve);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.renderContents(entry.isIntersecting);
        });
      },
      { threshold: [0, 0.1, 0.9, 1] }
    );
    observer.observe(elToObserve);
  }

  renderContents(isInView: boolean) {
    if (isInView && !this.alreadyRendered) {
      this.vcRef.clear();
      this.vcRef.createEmbeddedView(this.tplRef);
      this.alreadyRendered = true;
    }
  }

  setMinWidthHeight(el: HTMLElement) {
    const style = window.getComputedStyle(el);
    const [width, height] = [parseInt(style.width), parseInt(style.height)];
    !width && (el.style.minWidth = '40px');
    !height && (el.style.minHeight = '40px');
  }
}
