import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CSSProperties } from 'react';

const meta: Meta<typeof Carousel> = {
  title: "Molecules/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    showArrows: {
      control: "boolean",
      description: "Show navigation arrows",
    },
    showStatus: {
      control: "boolean",
      description: "Show status indicator",
    },
    showIndicators: {
      control: "boolean",
      description: "Show navigation indicators",
    },
    infiniteLoop: {
      control: "boolean",
      description: "Enable infinite loop",
    },
    showThumbs: {
      control: "boolean",
      description: "Show thumbnails",
    },
    autoPlay: {
      control: "boolean",
      description: "Enable auto play",
    },
    stopOnHover: {
      control: "boolean",
      description: "Stop auto play on hover",
    },
    swipeable: {
      control: "boolean",
      description: "Enable swiping",
    },
    emulateTouch: {
      control: "boolean",
      description: "Emulate touch for desktop devices",
    },
    centerMode: {
      control: "boolean",
      description: "Enable center mode",
    },
    centerSlidePercentage: {
      control: { type: "number", min: 50, max: 100, step: 5 },
      description: "Percentage width of center slide",
    },
    interval: {
      control: { type: "number", min: 1000, max: 10000, step: 500 },
      description: "Auto play interval in milliseconds",
    },
    transitionTime: {
      control: { type: "number", min: 100, max: 2000, step: 100 },
      description: "Transition time in milliseconds",
    },
    axis: {
      control: { type: "select", options: ["horizontal", "vertical"] },
      description: "Carousel axis orientation",
    },
    width: {
      control: "text",
      description: "Fixed width for the carousel",
    },
    animationHandler: {
      control: { type: "select", options: ["slide", "fade"] },
      description: "Animation type",
    },
  },
  args: {
    showArrows: true,
    showStatus: true,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: true,
    autoPlay: false,
    stopOnHover: true,
    swipeable: true,
    emulateTouch: true,
    centerMode: false,
    centerSlidePercentage: 80,
    interval: 2000,
    transitionTime: 500,
    axis: "horizontal",
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const createCarouselItemImage = (index: number) => (
  <div key={index}>
    <img src={`/carousel/${index}.jpeg`} alt={`Image ${index}`} />
    <p className="legend">Legend {index}</p>
  </div>
);

const baseChildren = <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>;

export const Basic: Story = {
  render: (args) => (
    <Carousel {...args}>
      {baseChildren.props.children}
    </Carousel>
  ),
};

export const Vertical: Story = {
  args: {
    axis: "vertical",
  },
  render: (args) => (
    <Carousel {...args}>
      {baseChildren.props.children}
    </Carousel>
  ),
};

export const CenterMode: Story = {
  args: {
    centerMode: true,
    centerSlidePercentage: 80,
  },
  render: (args) => (
    <Carousel {...args}>
      {baseChildren.props.children}
    </Carousel>
  ),
};

export const WithCustomStatusArrowsAndIndicators: Story = {
  render: () => {
    const arrowStyles: CSSProperties = {
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 15px)',
      width: 30,
      height: 30,
      cursor: 'pointer',
    };

    const indicatorStyles: CSSProperties = {
      background: '#fff',
      width: 8,
      height: 8,
      display: 'inline-block',
      margin: '0 8px',
    };

    return (
      <Carousel
        statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
              -
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
              +
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                style={{ ...indicatorStyles, background: '#000' }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {baseChildren.props.children}
      </Carousel>
    );
  },
};

export const FixedWidth: Story = {
  args: {
    width: "700px",
  },
  render: (args) => (
    <Carousel {...args}>
      {baseChildren.props.children}
    </Carousel>
  ),
};


export const NoImages: Story = {
  render: (args) => (
    <Carousel {...args}>
      <div key="slide1" style={{ padding: 20, height: 150 }}>
        Text 01
      </div>
      <div key="slide2" style={{ padding: 20, height: 150 }}>
        Text 02
      </div>
    </Carousel>
  ),
};
