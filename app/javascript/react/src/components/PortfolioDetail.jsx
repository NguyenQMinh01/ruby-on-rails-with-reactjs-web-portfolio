// import React, { Component } from 'react';

// class PortfolioDetail extends Component {
//   state = {
//     project: {}
//   }

//   componentDidMount() {

//     // Ví dụ dữ liệu giả lập:
//     const projectId = this.props.match.params.id;
//     const fakeApiData = {
//       id: projectId,
//       title: `Project ${projectId}`,
//       description: `This is a detailed description of Project ${projectId}.`,
//       // Các thông tin chi tiết khác của dự án
//     };

//     this.setState({ project: fakeApiData });
//   }

//   render() {
//     const { project } = this.state;

//     return (
//       <div>
//         <h1>{project.title}</h1>
//         <p>{project.description}</p>
//         {/* Hiển thị các thông tin chi tiết khác của dự án */}
//         <div className="project-details">
//           {/* Thêm các thông tin chi tiết dự án ở đây */}
//         </div>
//       </div>
//     );
//   }
// }

// export default PortfolioDetail;
