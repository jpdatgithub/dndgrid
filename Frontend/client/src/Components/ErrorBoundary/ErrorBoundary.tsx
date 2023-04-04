import React from 'react';

interface IErrorBoundaryProps {
    children: any
}

interface IErrorBoundaryState {
    hasError: boolean
}

export default class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
      return { hasError: true };
  }

  render() {
      if (this.state.hasError) {
          return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
  }
}