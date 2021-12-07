# Copyright 2021 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

FROM dataformco/dataform

# Install data build tool
#RUN apt update
#RUN apt -y install nodejs npm
# RUN npm install @dataform/core
# RUN npm install @dataform/cli

# Set working directory
ENV DATAFORM_DIR .
WORKDIR $DATAFORM_DIR

# Copy files to the image
COPY . $DATAFORM_DIR

# Run dbt
ENTRYPOINT ["dataform"]