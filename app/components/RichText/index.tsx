import * as React from "react";

export type Element = { type: string; [key: string]: string };

export type RenderElementProps = {
  attributes: { [key: string]: string };
  children: React.ReactNode;
  element: { type: string; [key: string]: string };
};
export type RenderLeafProps = {
  attributes: { [key: string]: string };
  leaf: { text: string; [key: string]: string };
};

export type SlatePresentationContextProps = {
  renderElement: (props: RenderElementProps) => React.ReactNode;
  renderLeaf: (props: RenderLeafProps) => React.ReactNode;
};

export type SlateReactPresentationProps = {
  value: any[];
  renderElement?: (props: RenderElementProps) => React.ReactNode;
  renderLeaf?: (props: RenderLeafProps) => React.ReactNode;
};

const useSlatePresentation = (): SlatePresentationContextProps =>
  React.useContext<SlatePresentationContextProps>(SlatePresentationContext);

const isElement = (value: any): boolean => Object.keys(value).includes("type");

function Children({ children = [] as any[] }) {
  const { renderElement, renderLeaf } = useSlatePresentation();
  return (
    <React.Fragment>
      {children.map((child, i) => {
        if (isElement(child)) {
          return (
            <React.Fragment key={i}>
              {renderElement({
                attributes: {},
                children: <Children>{child.children}</Children>,
                element: child,
              })}
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={i}>
              {renderLeaf({
                attributes: {},
                leaf: child,
              })}
            </React.Fragment>
          );
        }
      })}
    </React.Fragment>
  );
}

export const SlateReactPresentation: React.FC<SlateReactPresentationProps> = ({
  value = [],
  renderElement = defaults.renderElement,
  renderLeaf = defaults.renderLeaf,
}) => (
  <SlatePresentationContext.Provider value={{ renderElement, renderLeaf }}>
    <Children>{value}</Children>
  </SlatePresentationContext.Provider>
);

const defaults = {
  renderElement: ({ attributes, children, element }: RenderElementProps) => {
    switch (element.type) {
      case "block-quote":
        return <blockquote {...attributes}>{children}</blockquote>;
      case "bulleted-list":
        return <ul {...attributes}>{children}</ul>;
      case "heading-one":
        return <h1 {...attributes}>{children}</h1>;
      case "heading-two":
        return <h2 {...attributes}>{children}</h2>;
      case "list-item":
        return <li {...attributes}>{children}</li>;
      case "numbered-list":
        return <ol {...attributes}>{children}</ol>;
      case "link":
        return (
          <a {...attributes} href={element.href}>
            {children}
          </a>
        );
      case "paragraph":
      default:
        return <p {...attributes}>{children}</p>;
    }
  },
  renderLeaf: ({ attributes, leaf }: RenderLeafProps) => {
    if (leaf.bold) {
      return <strong {...attributes}>{leaf.text}</strong>;
    }

    if (leaf.code) {
      return <code {...attributes}>{leaf.text}</code>;
    }

    if (leaf.italic) {
      return <em {...attributes}>{leaf.text}</em>;
    }

    if (leaf.underline) {
      return <u {...attributes}>{leaf.text}</u>;
    }

    if (Object.keys(attributes).length > 0) {
      return <span {...attributes}>{leaf.text}</span>;
    }

    return leaf.text;
  },
};

const SlatePresentationContext =
  React.createContext<SlatePresentationContextProps>({
    renderElement: defaults.renderElement,
    renderLeaf: defaults.renderLeaf,
  });
